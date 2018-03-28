/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import nodeFetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';
import passport from './passport';
import router from './router';
import models from './data/models';
import schema from './data/schema';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import { setRuntimeVariable } from './actions/runtime';
import { config as configuration } from 'dotenv';
import config from './config';
// Import Mongoose & twitter
import mongoose from 'mongoose';
import twitter from 'twitter';
//import html sanitizer
//import sanitizeHtml from 'sanitize-html';
var sanitizeHtml = require('sanitize-html');
// Import Tone Analyzer Watson API
import ToneAnalyzerV3 from 'watson-developer-cloud/tone-analyzer/v3';

// Require Tweet Schema
import Tweet from './data/models/mongodb/Tweet'
//require Entry Schema
import Entry from './data/models/mongodb/Entry'
import streamHandler from './data/utils/streamHandler';

const app = express();
configuration({path:'../.env'});
//console.log(process.env)
//
// Tone Analyzer Watson API
// -----------------------------------------------------------------------------
let tone_analyzer = new ToneAnalyzerV3(config.auth.watson);
//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(
  expressJwt({
    secret: config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: req => req.cookies.id_token,
  }),
);
// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof Jwt401Error) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

app.use(passport.initialize());

if (__DEV__) {
  app.enable('trust proxy');
}
app.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'user_location'],
    session: false,
  }),
);
app.get(
  '/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  },
);

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use(
  '/graphql',
  expressGraphQL(req => ({
    schema,
    graphiql: __DEV__,
    rootValue: { request: req },
    pretty: __DEV__,
  })),
);

//
// Connect to MongoDB
// -----------------------------------------------------------------------------
//set up a database on your local machine that corresponds with the url below
mongoose.connect('mongodb://127.0.0.1:27017/mood-journal');
let db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});
//testing route.
//need a route to read all entries, read your entries with params, insert one
//DONE
app.get('/api/entries', function(req, res){
  Entry.getAll({}, 0, function(entries){
    res.send(entries);
  });
})
app.get('/api/entries/find/:name', function(req, res){
  console.log(req.params.name)
  Entry.getEntries({writtenBy: req.params.name}, 0, function(entries){
    res.send(entries);
  });
})
//
//accept json object sent with the needed parameters
//https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//create sentiment analysis
app.post('/api/entries/create', function(req, res, next){
  console.log(req.body.text);
  //cleans up any html tags that affect the mood score
  let clean = sanitizeHtml(req.body.text, {
    allowedTags: [],
    textFilter: function(text){
      return text + ' ';
    }
  });
  console.log(clean)
  let params = {
    'tone_input': req.body.text,
    'text': clean,
    'content_type': 'text/plain'
  }
  tone_analyzer.tone(params, function(error, response){
    if(error){
      console.log('error:', error);
      res.end();
    }
    else{
      req.body.sentiment = response;
      next();
    }
  }
)

})
app.post('/api/entries/create', function(req, res){
  //double chcek if this is properly formatted first, the rest of the checking will occur in the model
  //no need to track the date
  console.log(req.body);
  let userEntry = req.body;
    // let test = {
  //   date: Date(),
  //   writtenBy: "Postman",
  //   body: "testing 123",
  //   sentiment: "neutral"
  // }
  Entry.addEntry(userEntry, function(confirm){
      console.log(confirm);
      res.send(confirm)
    })

  // if(isJson(req.body.entry)){
  //   let entry = req.body.entry
  //   Entry.addEntry(entry, function(confirm){
  //     console.log(confirm);
  //     res.send(confirm);
  //   }
  // )}
})
//api route to find all the entries that are written
app.delete('/api/entries/:entryId', function(req, res){
  let entryId = req.params.entryId;
  Entry.deleteEntry(entryId, function(confirm){
    console.log(confirm);
    res.send(confirm);
  })
})
// Twitter API
// -----------------------------------------------------------------------------
let twit = new twitter(config.auth.twitter);

// Create twitter stream1
twit.stream('statuses/filter',{ track: 'girlscouts,girlguidescanada,girlguides,girlguidescookies,myplanet'}, function(stream){
  streamHandler(stream);
});

// Twitter and Watson Utterances Tone JSON endpoint
// Go to localhost:3000/page/0/0
app.get('/page/:page/:skip', function(req, res) {
  // console.log(req.params)
  // Fetch tweets by page via param
  Tweet.getTweets(0, 0, function(tweets) {
    // console.log('THE TWEETS', tweets);

    // Instantiate new utterancesObj to match required intake params
    // of Watson API
    let utterancesObj = {
      utterances: tweets.map(tweet => ({
        text: tweet.body
      }))
    };

    tone_analyzer.tone_chat(utterancesObj, function(error, response) {
      if (error)
        console.log('error:', error);
        // res.send(500);
      else
        // console.log(JSON.stringify(response, null, 2));

        var utterancesTone = response;

        // Render as both tweets and utterances tone as JSON
        res.send({tweets, utterancesTone});
      }
    );
  });
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Universal HTTP client
    const fetch = createFetch(nodeFetch, {
      baseUrl: config.api.serverUrl,
      cookie: req.headers.cookie,
    });

    const initialState = {
      user: req.user || null,
    };

    const store = configureStore(initialState, {
      fetch,
      // I should not use `history` on server.. but how I do redirection? follow universal-router
    });

    store.dispatch(
      setRuntimeVariable({
        name: 'initialNow',
        value: Date.now(),
      }),
    );

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      fetch,
      // You can access redux through react-redux connect
      store,
      storeSubscription: null,
    };

    const route = await router.resolve({
      ...context,
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context} store={store}>
        {route.component}
      </App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    data.scripts = [assets.vendor.js];
    if (route.chunks) {
      data.scripts.push(...route.chunks.map(chunk => assets[chunk].js));
    }
    data.scripts.push(assets.client.js);
    data.app = {
      apiUrl: config.api.clientUrl,
      state: context.store.getState(),
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
const promise = models.sync().catch(err => console.error(err.stack));
if (!module.hot) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
