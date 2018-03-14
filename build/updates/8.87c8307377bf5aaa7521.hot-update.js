require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./src/data/models/mongodb/Entry.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");

// Create a new schema for our journal entry data
var schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },

  writtenBy: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  sentiment: {
    type: mongoose.Schema.Types.Any
  }
});
//create a custom query method to return entries based on desired fields. only required field is writtenBy
//you only need to get the entries written by the right person
/*
query parameter formatting:
{
writtenBy:
date:
sentiment:
}
*/
schema.statics.getEntries = function (queryBuild, skip, callback) {
  let query = {
    writtenBy: queryBuild.writtenBy
  };
  let entries = [];
  query.date = queryBuild.date ? queryBuild.date : null;
  query.sentiment = queryBuild.sentiment ? queryBuild.sentiment : null;
  Entry.find(query).sort({ date: 'desc' }).exec(function (err, docs) {
    if (err) {
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if (!err) {
      entries = docs;
      callback(entries);
    }
  });
};
//get all
schema.statics.getAll = function (empty, skip, callback) {
  let entries = [];
  Entry.find({}).sort({ date: 'desc' }).exec(function (err, docs) {
    if (err) {
      console.error(err);
    }
    //passes the information into the callback function so that you can do whatever you want with it.
    if (!err) {
      entries = docs;
      callback(entries);
    }
  });
};

// Return an Entry model based on the define schema
module.exports = Entry = mongoose.model('Entry', schema);

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__("express-jwt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pretty_error__ = __webpack_require__("pretty-error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_App__ = __webpack_require__("./src/components/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Html__ = __webpack_require__("./src/components/Html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__ = __webpack_require__("./src/routes/error/ErrorPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__ = __webpack_require__("./src/routes/error/ErrorPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createFetch__ = __webpack_require__("./src/createFetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passport__ = __webpack_require__("./src/passport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__("./src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_models__ = __webpack_require__("./src/data/models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_schema__ = __webpack_require__("./src/data/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json__ = __webpack_require__("./assets.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store_configureStore__ = __webpack_require__("./src/store/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_runtime__ = __webpack_require__("./src/actions/runtime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_twitter__ = __webpack_require__("twitter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_twitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_twitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3__ = __webpack_require__("watson-developer-cloud/tone-analyzer/v3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet__ = __webpack_require__("./src/data/models/mongodb/Tweet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_models_mongodb_Entry__ = __webpack_require__("./src/data/models/mongodb/Entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_models_mongodb_Entry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__data_models_mongodb_Entry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_utils_streamHandler__ = __webpack_require__("./src/data/utils/streamHandler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_utils_streamHandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__data_utils_streamHandler__);
var _jsxFileName = 'C:\\Users\\Nick\\Documents\\Github\\MoodJournal\\src\\server.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















 // eslint-disable-line import/no-unresolved




// Import Mongoose & twitter



// Import Tone Analyzer Watson API


// Require Tweet Schema

//require Entry Schema



const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tone Analyzer Watson API
// -----------------------------------------------------------------------------
let tone_analyzer = new __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3___default.a(__WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.watson);
//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_4_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token
}));
// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof __WEBPACK_IMPORTED_MODULE_4_express_jwt__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].initialize());

if (true) {
  app.enable('trust proxy');
}
app.get('/login/facebook', __WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].authenticate('facebook', {
  scope: ['email', 'user_location'],
  session: false
}));
app.get('/login/facebook/return', __WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].authenticate('facebook', {
  failureRedirect: '/login',
  session: false
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_19__data_schema__["a" /* default */],
  graphiql: true,
  rootValue: { request: req },
  pretty: true
})));

//
// Connect to MongoDB
// -----------------------------------------------------------------------------
//set up a database on your local machine that corresponds with the url below
__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect('mongodb://127.0.0.1:27017/mood-journal');
let db = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});
//testing route.
app.get('/test/test', function (req, res) {
  __WEBPACK_IMPORTED_MODULE_28__data_models_mongodb_Entry___default.a.getAll({}, 0, function (entries) {
    console.log(entries);
    res.send(entries);
  });
  res.send('testing');
});
//
// Twitter API
// -----------------------------------------------------------------------------
let twit = new __WEBPACK_IMPORTED_MODULE_25_twitter___default.a(__WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.twitter);

// Create twitter stream
twit.stream('statuses/filter', { track: 'girlscouts,girlguidescanada,girlguides,girlguidescookies,myplanet' }, function (stream) {
  __WEBPACK_IMPORTED_MODULE_29__data_utils_streamHandler___default()(stream);
});

// Twitter and Watson Utterances Tone JSON endpoint
// Go to localhost:3000/page/0/0
app.get('/page/:page/:skip', function (req, res) {
  // console.log(req.params)
  // Fetch tweets by page via param
  __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet___default.a.getTweets(0, 0, function (tweets) {
    // console.log('THE TWEETS', tweets);

    // Instantiate new utterancesObj to match required intake params
    // of Watson API
    let utterancesObj = {
      utterances: tweets.map(tweet => ({
        text: tweet.body
      }))
    };

    tone_analyzer.tone_chat(utterancesObj, function (error, response) {
      if (error) console.log('error:', error);
      // res.send(500);
      else
        // console.log(JSON.stringify(response, null, 2));

        var utterancesTone = response;

      // Render as both tweets and utterances tone as JSON
      res.send({ tweets, utterancesTone });
    });
  });
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const css = new Set();

      // Universal HTTP client
      const fetch = Object(__WEBPACK_IMPORTED_MODULE_15__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_7_node_fetch___default.a, {
        baseUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      const initialState = {
        user: req.user || null
      };

      const store = Object(__WEBPACK_IMPORTED_MODULE_21__store_configureStore__["a" /* default */])(initialState, {
        fetch
        // I should not use `history` on server.. but how I do redirection? follow universal-router
      });

      store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_22__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__router__["default"].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__components_App__["a" /* default */],
        { context: context, store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: _this
        },
        route.component
      ));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.vendor.js];
      if (route.chunks) {
        data.scripts.push(...route.chunks.map(function (chunk) {
          return __WEBPACK_IMPORTED_MODULE_20__assets_json___default.a[chunk].js;
        }));
      }
      data.scripts.push(__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.client.js);
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      const html = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Html__["a" /* default */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: _this
      })));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_10_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_12__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
const promise = __WEBPACK_IMPORTED_MODULE_18__data_models__["e" /* default */].sync().catch(err => console.error(err.stack));
if (false) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (true) {
  app.hot = module.hot;
  module.hot.accept("./src/router.js", function() { /* harmony import */ __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__("./src/router.js");  });
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84Ljg3YzgzMDczNzdiZjVhYWE3NTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXGRhdGFcXG1vZGVsc1xcbW9uZ29kYlxcRW50cnkuanMiLCJDOlxcVXNlcnNcXE5pY2tcXERvY3VtZW50c1xcR2l0aHViXFxNb29kSm91cm5hbFxcc3JjXFxzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBzY2hlbWEgZm9yIG91ciBqb3VybmFsIGVudHJ5IGRhdGFcclxudmFyIHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGRhdGU6e1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG5cclxuICB3cml0dGVuQnk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgc2VudGltZW50OiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuQW55XHJcbiAgfVxyXG59KTtcclxuLy9jcmVhdGUgYSBjdXN0b20gcXVlcnkgbWV0aG9kIHRvIHJldHVybiBlbnRyaWVzIGJhc2VkIG9uIGRlc2lyZWQgZmllbGRzLiBvbmx5IHJlcXVpcmVkIGZpZWxkIGlzIHdyaXR0ZW5CeVxyXG4vL3lvdSBvbmx5IG5lZWQgdG8gZ2V0IHRoZSBlbnRyaWVzIHdyaXR0ZW4gYnkgdGhlIHJpZ2h0IHBlcnNvblxyXG4vKlxyXG5xdWVyeSBwYXJhbWV0ZXIgZm9ybWF0dGluZzpcclxue1xyXG53cml0dGVuQnk6XHJcbmRhdGU6XHJcbnNlbnRpbWVudDpcclxufVxyXG4qL1xyXG5zY2hlbWEuc3RhdGljcy5nZXRFbnRyaWVzID0gZnVuY3Rpb24ocXVlcnlCdWlsZCwgc2tpcCwgY2FsbGJhY2spIHtcclxuICBsZXQgcXVlcnkgPSB7XHJcbiAgICB3cml0dGVuQnk6IHF1ZXJ5QnVpbGQud3JpdHRlbkJ5XHJcbiAgfVxyXG4gIGxldCBlbnRyaWVzID0gW107XHJcbiAgcXVlcnkuZGF0ZSA9IChxdWVyeUJ1aWxkLmRhdGUgPyBxdWVyeUJ1aWxkLmRhdGUgOiBudWxsKTtcclxuICBxdWVyeS5zZW50aW1lbnQgPSAocXVlcnlCdWlsZC5zZW50aW1lbnQgPyBxdWVyeUJ1aWxkLnNlbnRpbWVudCA6IG51bGwpO1xyXG4gIEVudHJ5LmZpbmQocXVlcnkpLnNvcnQoe2RhdGU6ICdkZXNjJ30pLmV4ZWMoZnVuY3Rpb24oZXJyLCBkb2NzKXtcclxuICAgIGlmKGVycil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIC8vcGFzc2VzIHRoZSBpbmZvcm1hdGlvbiBpbnRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBzbyB0aGF0IHlvdSBjYW4gZG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCBpdC5cclxuICAgIGlmKCFlcnIpe1xyXG4gICAgICBlbnRyaWVzID0gZG9jcztcclxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vL2dldCBhbGxcclxuc2NoZW1hLnN0YXRpY3MuZ2V0QWxsID0gZnVuY3Rpb24oZW1wdHksIHNraXAsIGNhbGxiYWNrKSB7XHJcbiAgbGV0IGVudHJpZXMgPSBbXTtcclxuICBFbnRyeS5maW5kKHt9KS5zb3J0KHtkYXRlOiAnZGVzYyd9KS5leGVjKGZ1bmN0aW9uKGVyciwgZG9jcyl7XHJcbiAgICBpZihlcnIpe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICAvL3Bhc3NlcyB0aGUgaW5mb3JtYXRpb24gaW50byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gc28gdGhhdCB5b3UgY2FuIGRvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggaXQuXHJcbiAgICBpZighZXJyKXtcclxuICAgICAgZW50cmllcyA9IGRvY3M7XHJcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFJldHVybiBhbiBFbnRyeSBtb2RlbCBiYXNlZCBvbiB0aGUgZGVmaW5lIHNjaGVtYVxyXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJ5ID0gbW9uZ29vc2UubW9kZWwoJ0VudHJ5Jywgc2NoZW1hKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRhL21vZGVscy9tb25nb2RiL0VudHJ5LmpzIiwiLyoqXHJcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IGV4cHJlc3NKd3QsIHsgVW5hdXRob3JpemVkRXJyb3IgYXMgSnd0NDAxRXJyb3IgfSBmcm9tICdleHByZXNzLWp3dCc7XHJcbmltcG9ydCBleHByZXNzR3JhcGhRTCBmcm9tICdleHByZXNzLWdyYXBocWwnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBub2RlRmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IFByZXR0eUVycm9yIGZyb20gJ3ByZXR0eS1lcnJvcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCBIdG1sIGZyb20gJy4vY29tcG9uZW50cy9IdG1sJztcclxuaW1wb3J0IHsgRXJyb3JQYWdlV2l0aG91dFN0eWxlIH0gZnJvbSAnLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlJztcclxuaW1wb3J0IGVycm9yUGFnZVN0eWxlIGZyb20gJy4vcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlRmV0Y2ggZnJvbSAnLi9jcmVhdGVGZXRjaCc7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XHJcbmltcG9ydCBtb2RlbHMgZnJvbSAnLi9kYXRhL21vZGVscyc7XHJcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9kYXRhL3NjaGVtYSc7XHJcbmltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldHMuanNvbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBzZXRSdW50aW1lVmFyaWFibGUgfSBmcm9tICcuL2FjdGlvbnMvcnVudGltZSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuLy8gSW1wb3J0IE1vbmdvb3NlICYgdHdpdHRlclxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgdHdpdHRlciBmcm9tICd0d2l0dGVyJztcclxuXHJcbi8vIEltcG9ydCBUb25lIEFuYWx5emVyIFdhdHNvbiBBUElcclxuaW1wb3J0IFRvbmVBbmFseXplclYzIGZyb20gJ3dhdHNvbi1kZXZlbG9wZXItY2xvdWQvdG9uZS1hbmFseXplci92Myc7XHJcblxyXG4vLyBSZXF1aXJlIFR3ZWV0IFNjaGVtYVxyXG5pbXBvcnQgVHdlZXQgZnJvbSAnLi9kYXRhL21vZGVscy9tb25nb2RiL1R3ZWV0J1xyXG4vL3JlcXVpcmUgRW50cnkgU2NoZW1hXHJcbmltcG9ydCBFbnRyeSBmcm9tICcuL2RhdGEvbW9kZWxzL21vbmdvZGIvRW50cnknXHJcbmltcG9ydCBzdHJlYW1IYW5kbGVyIGZyb20gJy4vZGF0YS91dGlscy9zdHJlYW1IYW5kbGVyJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vXHJcbi8vIFRvbmUgQW5hbHl6ZXIgV2F0c29uIEFQSVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgdG9uZV9hbmFseXplciA9IG5ldyBUb25lQW5hbHl6ZXJWMyhjb25maWcuYXV0aC53YXRzb24pO1xyXG4vL1xyXG4vLyBUZWxsIGFueSBDU1MgdG9vbGluZyAoc3VjaCBhcyBNYXRlcmlhbCBVSSkgdG8gdXNlIGFsbCB2ZW5kb3IgcHJlZml4ZXMgaWYgdGhlXHJcbi8vIHVzZXIgYWdlbnQgaXMgbm90IGtub3duLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5nbG9iYWwubmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvciB8fCB7fTtcclxuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgPSBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnYWxsJztcclxuXHJcbi8vXHJcbi8vIFJlZ2lzdGVyIE5vZGUuanMgbWlkZGxld2FyZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5cclxuLy9cclxuLy8gQXV0aGVudGljYXRpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuYXBwLnVzZShcclxuICBleHByZXNzSnd0KHtcclxuICAgIHNlY3JldDogY29uZmlnLmF1dGguand0LnNlY3JldCxcclxuICAgIGNyZWRlbnRpYWxzUmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgZ2V0VG9rZW46IHJlcSA9PiByZXEuY29va2llcy5pZF90b2tlbixcclxuICB9KSxcclxuKTtcclxuLy8gRXJyb3IgaGFuZGxlciBmb3IgZXhwcmVzcy1qd3RcclxuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBpZiAoZXJyIGluc3RhbmNlb2YgSnd0NDAxRXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tleHByZXNzLWp3dC1lcnJvcl0nLCByZXEuY29va2llcy5pZF90b2tlbik7XHJcbiAgICAvLyBgY2xlYXJDb29raWVgLCBvdGhlcndpc2UgdXNlciBjYW4ndCB1c2Ugd2ViLWFwcCB1bnRpbCBjb29raWUgZXhwaXJlc1xyXG4gICAgcmVzLmNsZWFyQ29va2llKCdpZF90b2tlbicpO1xyXG4gIH1cclxuICBuZXh0KGVycik7XHJcbn0pO1xyXG5cclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5cclxuaWYgKF9fREVWX18pIHtcclxuICBhcHAuZW5hYmxlKCd0cnVzdCBwcm94eScpO1xyXG59XHJcbmFwcC5nZXQoXHJcbiAgJy9sb2dpbi9mYWNlYm9vaycsXHJcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdmYWNlYm9vaycsIHtcclxuICAgIHNjb3BlOiBbJ2VtYWlsJywgJ3VzZXJfbG9jYXRpb24nXSxcclxuICAgIHNlc3Npb246IGZhbHNlLFxyXG4gIH0pLFxyXG4pO1xyXG5hcHAuZ2V0KFxyXG4gICcvbG9naW4vZmFjZWJvb2svcmV0dXJuJyxcclxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2ZhY2Vib29rJywge1xyXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcclxuICAgIHNlc3Npb246IGZhbHNlLFxyXG4gIH0pLFxyXG4gIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgZXhwaXJlc0luID0gNjAgKiA2MCAqIDI0ICogMTgwOyAvLyAxODAgZGF5c1xyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihyZXEudXNlciwgY29uZmlnLmF1dGguand0LnNlY3JldCwgeyBleHBpcmVzSW4gfSk7XHJcbiAgICByZXMuY29va2llKCdpZF90b2tlbicsIHRva2VuLCB7IG1heEFnZTogMTAwMCAqIGV4cGlyZXNJbiwgaHR0cE9ubHk6IHRydWUgfSk7XHJcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcclxuICB9LFxyXG4pO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgQVBJIG1pZGRsZXdhcmVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuYXBwLnVzZShcclxuICAnL2dyYXBocWwnLFxyXG4gIGV4cHJlc3NHcmFwaFFMKHJlcSA9PiAoe1xyXG4gICAgc2NoZW1hLFxyXG4gICAgZ3JhcGhpcWw6IF9fREVWX18sXHJcbiAgICByb290VmFsdWU6IHsgcmVxdWVzdDogcmVxIH0sXHJcbiAgICBwcmV0dHk6IF9fREVWX18sXHJcbiAgfSkpLFxyXG4pO1xyXG5cclxuLy9cclxuLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vc2V0IHVwIGEgZGF0YWJhc2Ugb24geW91ciBsb2NhbCBtYWNoaW5lIHRoYXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgdXJsIGJlbG93XHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvbW9vZC1qb3VybmFsJyk7XHJcbmxldCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5kYi5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvb3NlIEVycm9yOiAnLCBlcnIpO1xyXG59KTtcclxuXHJcbmRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvb3NlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bC4nKTtcclxufSk7XHJcbi8vdGVzdGluZyByb3V0ZS5cclxuYXBwLmdldCgnL3Rlc3QvdGVzdCcsIGZ1bmN0aW9uKHJlcSwgcmVzKXtcclxuICBFbnRyeS5nZXRBbGwoe30sIDAsIGZ1bmN0aW9uKGVudHJpZXMpe1xyXG4gICAgY29uc29sZS5sb2coZW50cmllcyk7XHJcbiAgICByZXMuc2VuZChlbnRyaWVzKTtcclxuICB9KTtcclxuICByZXMuc2VuZCgndGVzdGluZycpO1xyXG59KVxyXG4vL1xyXG4vLyBUd2l0dGVyIEFQSVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgdHdpdCA9IG5ldyB0d2l0dGVyKGNvbmZpZy5hdXRoLnR3aXR0ZXIpO1xyXG5cclxuLy8gQ3JlYXRlIHR3aXR0ZXIgc3RyZWFtXHJcbnR3aXQuc3RyZWFtKCdzdGF0dXNlcy9maWx0ZXInLHsgdHJhY2s6ICdnaXJsc2NvdXRzLGdpcmxndWlkZXNjYW5hZGEsZ2lybGd1aWRlcyxnaXJsZ3VpZGVzY29va2llcyxteXBsYW5ldCd9LCBmdW5jdGlvbihzdHJlYW0pe1xyXG4gIHN0cmVhbUhhbmRsZXIoc3RyZWFtKTtcclxufSk7XHJcblxyXG4vLyBUd2l0dGVyIGFuZCBXYXRzb24gVXR0ZXJhbmNlcyBUb25lIEpTT04gZW5kcG9pbnRcclxuLy8gR28gdG8gbG9jYWxob3N0OjMwMDAvcGFnZS8wLzBcclxuYXBwLmdldCgnL3BhZ2UvOnBhZ2UvOnNraXAnLCBmdW5jdGlvbihyZXEsIHJlcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMpXHJcbiAgLy8gRmV0Y2ggdHdlZXRzIGJ5IHBhZ2UgdmlhIHBhcmFtXHJcbiAgVHdlZXQuZ2V0VHdlZXRzKDAsIDAsIGZ1bmN0aW9uKHR3ZWV0cykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1RIRSBUV0VFVFMnLCB0d2VldHMpO1xyXG5cclxuICAgIC8vIEluc3RhbnRpYXRlIG5ldyB1dHRlcmFuY2VzT2JqIHRvIG1hdGNoIHJlcXVpcmVkIGludGFrZSBwYXJhbXNcclxuICAgIC8vIG9mIFdhdHNvbiBBUElcclxuICAgIGxldCB1dHRlcmFuY2VzT2JqID0ge1xyXG4gICAgICB1dHRlcmFuY2VzOiB0d2VldHMubWFwKHR3ZWV0ID0+ICh7XHJcbiAgICAgICAgdGV4dDogdHdlZXQuYm9keVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcblxyXG4gICAgdG9uZV9hbmFseXplci50b25lX2NoYXQodXR0ZXJhbmNlc09iaiwgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChlcnJvcilcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIHJlcy5zZW5kKDUwMCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMikpO1xyXG5cclxuICAgICAgICB2YXIgdXR0ZXJhbmNlc1RvbmUgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIGFzIGJvdGggdHdlZXRzIGFuZCB1dHRlcmFuY2VzIHRvbmUgYXMgSlNPTlxyXG4gICAgICAgIHJlcy5zZW5kKHt0d2VldHMsIHV0dGVyYW5jZXNUb25lfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nIG1pZGRsZXdhcmVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuYXBwLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjc3MgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gVW5pdmVyc2FsIEhUVFAgY2xpZW50XHJcbiAgICBjb25zdCBmZXRjaCA9IGNyZWF0ZUZldGNoKG5vZGVGZXRjaCwge1xyXG4gICAgICBiYXNlVXJsOiBjb25maWcuYXBpLnNlcnZlclVybCxcclxuICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIHVzZXI6IHJlcS51c2VyIHx8IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCB7XHJcbiAgICAgIGZldGNoLFxyXG4gICAgICAvLyBJIHNob3VsZCBub3QgdXNlIGBoaXN0b3J5YCBvbiBzZXJ2ZXIuLiBidXQgaG93IEkgZG8gcmVkaXJlY3Rpb24/IGZvbGxvdyB1bml2ZXJzYWwtcm91dGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgc2V0UnVudGltZVZhcmlhYmxlKHtcclxuICAgICAgICBuYW1lOiAnaW5pdGlhbE5vdycsXHJcbiAgICAgICAgdmFsdWU6IERhdGUubm93KCksXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBHbG9iYWwgKGNvbnRleHQpIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBlYXNpbHkgYWNjZXNzZWQgZnJvbSBhbnkgUmVhY3QgY29tcG9uZW50XHJcbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxyXG4gICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXHJcbiAgICAgIGluc2VydENzczogKC4uLnN0eWxlcykgPT4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IGNzcy5hZGQoc3R5bGUuX2dldENzcygpKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZldGNoLFxyXG4gICAgICAvLyBZb3UgY2FuIGFjY2VzcyByZWR1eCB0aHJvdWdoIHJlYWN0LXJlZHV4IGNvbm5lY3RcclxuICAgICAgc3RvcmUsXHJcbiAgICAgIHN0b3JlU3Vic2NyaXB0aW9uOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IHJvdXRlci5yZXNvbHZlKHtcclxuICAgICAgLi4uY29udGV4dCxcclxuICAgICAgcGF0aDogcmVxLnBhdGgsXHJcbiAgICAgIHF1ZXJ5OiByZXEucXVlcnksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocm91dGUucmVkaXJlY3QpIHtcclxuICAgICAgcmVzLnJlZGlyZWN0KHJvdXRlLnN0YXR1cyB8fCAzMDIsIHJvdXRlLnJlZGlyZWN0KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJvdXRlIH07XHJcbiAgICBkYXRhLmNoaWxkcmVuID0gUmVhY3RET00ucmVuZGVyVG9TdHJpbmcoXHJcbiAgICAgIDxBcHAgY29udGV4dD17Y29udGV4dH0gc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICB7cm91dGUuY29tcG9uZW50fVxyXG4gICAgICA8L0FwcD4sXHJcbiAgICApO1xyXG4gICAgZGF0YS5zdHlsZXMgPSBbeyBpZDogJ2NzcycsIGNzc1RleHQ6IFsuLi5jc3NdLmpvaW4oJycpIH1dO1xyXG4gICAgZGF0YS5zY3JpcHRzID0gW2Fzc2V0cy52ZW5kb3IuanNdO1xyXG4gICAgaWYgKHJvdXRlLmNodW5rcykge1xyXG4gICAgICBkYXRhLnNjcmlwdHMucHVzaCguLi5yb3V0ZS5jaHVua3MubWFwKGNodW5rID0+IGFzc2V0c1tjaHVua10uanMpKTtcclxuICAgIH1cclxuICAgIGRhdGEuc2NyaXB0cy5wdXNoKGFzc2V0cy5jbGllbnQuanMpO1xyXG4gICAgZGF0YS5hcHAgPSB7XHJcbiAgICAgIGFwaVVybDogY29uZmlnLmFwaS5jbGllbnRVcmwsXHJcbiAgICAgIHN0YXRlOiBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cCg8SHRtbCB7Li4uZGF0YX0gLz4pO1xyXG4gICAgcmVzLnN0YXR1cyhyb3V0ZS5zdGF0dXMgfHwgMjAwKTtcclxuICAgIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBuZXh0KGVycik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vXHJcbi8vIEVycm9yIGhhbmRsaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHBlID0gbmV3IFByZXR0eUVycm9yKCk7XHJcbnBlLnNraXBOb2RlRmlsZXMoKTtcclxucGUuc2tpcFBhY2thZ2UoJ2V4cHJlc3MnKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihwZS5yZW5kZXIoZXJyKSk7XHJcbiAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKFxyXG4gICAgPEh0bWxcclxuICAgICAgdGl0bGU9XCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIlxyXG4gICAgICBkZXNjcmlwdGlvbj17ZXJyLm1lc3NhZ2V9XHJcbiAgICAgIHN0eWxlcz17W3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBlcnJvclBhZ2VTdHlsZS5fZ2V0Q3NzKCkgfV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuICAgID5cclxuICAgICAge1JlYWN0RE9NLnJlbmRlclRvU3RyaW5nKDxFcnJvclBhZ2VXaXRob3V0U3R5bGUgZXJyb3I9e2Vycn0gLz4pfVxyXG4gICAgPC9IdG1sPixcclxuICApO1xyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XHJcbn0pO1xyXG5cclxuLy9cclxuLy8gTGF1bmNoIHRoZSBzZXJ2ZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgcHJvbWlzZSA9IG1vZGVscy5zeW5jKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKSk7XHJcbmlmICghbW9kdWxlLmhvdCkge1xyXG4gIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICBhcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhgVGhlIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtjb25maWcucG9ydH0vYCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy9cclxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIGFwcC5ob3QgPSBtb2R1bGUuaG90O1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3JvdXRlcicpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQWZBO0FBbUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=