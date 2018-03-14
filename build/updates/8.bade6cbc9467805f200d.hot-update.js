require("source-map-support").install();
exports.id = 8;
exports.modules = {

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
app.get('/test', function (req, res) {
  __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet___default.a.getAll({}, 0, function (entries) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LmJhZGU2Y2JjOTQ2NzgwNWYyMDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXHNlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgZXhwcmVzc0p3dCwgeyBVbmF1dGhvcml6ZWRFcnJvciBhcyBKd3Q0MDFFcnJvciB9IGZyb20gJ2V4cHJlc3Mtand0JztcclxuaW1wb3J0IGV4cHJlc3NHcmFwaFFMIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG5vZGVGZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcclxuaW1wb3J0IEh0bWwgZnJvbSAnLi9jb21wb25lbnRzL0h0bWwnO1xyXG5pbXBvcnQgeyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfSBmcm9tICcuL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UnO1xyXG5pbXBvcnQgZXJyb3JQYWdlU3R5bGUgZnJvbSAnLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVGZXRjaCBmcm9tICcuL2NyZWF0ZUZldGNoJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJy4vcGFzc3BvcnQnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcclxuaW1wb3J0IG1vZGVscyBmcm9tICcuL2RhdGEvbW9kZWxzJztcclxuaW1wb3J0IHNjaGVtYSBmcm9tICcuL2RhdGEvc2NoZW1hJztcclxuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cy5qc29uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IHNldFJ1bnRpbWVWYXJpYWJsZSB9IGZyb20gJy4vYWN0aW9ucy9ydW50aW1lJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG4vLyBJbXBvcnQgTW9uZ29vc2UgJiB0d2l0dGVyXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gJ3R3aXR0ZXInO1xyXG5cclxuLy8gSW1wb3J0IFRvbmUgQW5hbHl6ZXIgV2F0c29uIEFQSVxyXG5pbXBvcnQgVG9uZUFuYWx5emVyVjMgZnJvbSAnd2F0c29uLWRldmVsb3Blci1jbG91ZC90b25lLWFuYWx5emVyL3YzJztcclxuXHJcbi8vIFJlcXVpcmUgVHdlZXQgU2NoZW1hXHJcbmltcG9ydCBUd2VldCBmcm9tICcuL2RhdGEvbW9kZWxzL21vbmdvZGIvVHdlZXQnXHJcbi8vcmVxdWlyZSBFbnRyeSBTY2hlbWFcclxuaW1wb3J0IEVudHJ5IGZyb20gJy4vZGF0YS9tb2RlbHMvbW9uZ29kYi9FbnRyeSdcclxuaW1wb3J0IHN0cmVhbUhhbmRsZXIgZnJvbSAnLi9kYXRhL3V0aWxzL3N0cmVhbUhhbmRsZXInO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy9cclxuLy8gVG9uZSBBbmFseXplciBXYXRzb24gQVBJXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmxldCB0b25lX2FuYWx5emVyID0gbmV3IFRvbmVBbmFseXplclYzKGNvbmZpZy5hdXRoLndhdHNvbik7XHJcbi8vXHJcbi8vIFRlbGwgYW55IENTUyB0b29saW5nIChzdWNoIGFzIE1hdGVyaWFsIFVJKSB0byB1c2UgYWxsIHZlbmRvciBwcmVmaXhlcyBpZiB0aGVcclxuLy8gdXNlciBhZ2VudCBpcyBub3Qga25vd24uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmdsb2JhbC5uYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yIHx8IHt9O1xyXG5nbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCA9IGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICdhbGwnO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgTm9kZS5qcyBtaWRkbGV3YXJlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcblxyXG4vL1xyXG4vLyBBdXRoZW50aWNhdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKFxyXG4gIGV4cHJlc3NKd3Qoe1xyXG4gICAgc2VjcmV0OiBjb25maWcuYXV0aC5qd3Quc2VjcmV0LFxyXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2UsXHJcbiAgICBnZXRUb2tlbjogcmVxID0+IHJlcS5jb29raWVzLmlkX3Rva2VuLFxyXG4gIH0pLFxyXG4pO1xyXG4vLyBFcnJvciBoYW5kbGVyIGZvciBleHByZXNzLWp3dFxyXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIGlmIChlcnIgaW5zdGFuY2VvZiBKd3Q0MDFFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2V4cHJlc3Mtand0LWVycm9yXScsIHJlcS5jb29raWVzLmlkX3Rva2VuKTtcclxuICAgIC8vIGBjbGVhckNvb2tpZWAsIG90aGVyd2lzZSB1c2VyIGNhbid0IHVzZSB3ZWItYXBwIHVudGlsIGNvb2tpZSBleHBpcmVzXHJcbiAgICByZXMuY2xlYXJDb29raWUoJ2lkX3Rva2VuJyk7XHJcbiAgfVxyXG4gIG5leHQoZXJyKTtcclxufSk7XHJcblxyXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcblxyXG5pZiAoX19ERVZfXykge1xyXG4gIGFwcC5lbmFibGUoJ3RydXN0IHByb3h5Jyk7XHJcbn1cclxuYXBwLmdldChcclxuICAnL2xvZ2luL2ZhY2Vib29rJyxcclxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2ZhY2Vib29rJywge1xyXG4gICAgc2NvcGU6IFsnZW1haWwnLCAndXNlcl9sb2NhdGlvbiddLFxyXG4gICAgc2Vzc2lvbjogZmFsc2UsXHJcbiAgfSksXHJcbik7XHJcbmFwcC5nZXQoXHJcbiAgJy9sb2dpbi9mYWNlYm9vay9yZXR1cm4nLFxyXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7XHJcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxyXG4gICAgc2Vzc2lvbjogZmFsc2UsXHJcbiAgfSksXHJcbiAgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcmVzSW4gPSA2MCAqIDYwICogMjQgKiAxODA7IC8vIDE4MCBkYXlzXHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlcS51c2VyLCBjb25maWcuYXV0aC5qd3Quc2VjcmV0LCB7IGV4cGlyZXNJbiB9KTtcclxuICAgIHJlcy5jb29raWUoJ2lkX3Rva2VuJywgdG9rZW4sIHsgbWF4QWdlOiAxMDAwICogZXhwaXJlc0luLCBodHRwT25seTogdHJ1ZSB9KTtcclxuICAgIHJlcy5yZWRpcmVjdCgnLycpO1xyXG4gIH0sXHJcbik7XHJcblxyXG4vL1xyXG4vLyBSZWdpc3RlciBBUEkgbWlkZGxld2FyZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKFxyXG4gICcvZ3JhcGhxbCcsXHJcbiAgZXhwcmVzc0dyYXBoUUwocmVxID0+ICh7XHJcbiAgICBzY2hlbWEsXHJcbiAgICBncmFwaGlxbDogX19ERVZfXyxcclxuICAgIHJvb3RWYWx1ZTogeyByZXF1ZXN0OiByZXEgfSxcclxuICAgIHByZXR0eTogX19ERVZfXyxcclxuICB9KSksXHJcbik7XHJcblxyXG4vL1xyXG4vLyBDb25uZWN0IHRvIE1vbmdvREJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9zZXQgdXAgYSBkYXRhYmFzZSBvbiB5b3VyIGxvY2FsIG1hY2hpbmUgdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSB1cmwgYmVsb3dcclxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9tb29kLWpvdXJuYWwnKTtcclxubGV0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHJcbmRiLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgRXJyb3I6ICcsIGVycik7XHJcbn0pO1xyXG5cclxuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsLicpO1xyXG59KTtcclxuLy90ZXN0aW5nIHJvdXRlLlxyXG5hcHAuZ2V0KCcvdGVzdCcsIGZ1bmN0aW9uKHJlcSwgcmVzKXtcclxuICBUd2VldC5nZXRBbGwoe30sIDAsIGZ1bmN0aW9uKGVudHJpZXMpe1xyXG4gICAgY29uc29sZS5sb2coZW50cmllcyk7XHJcbiAgICByZXMuc2VuZChlbnRyaWVzKTtcclxuICB9KTtcclxuICByZXMuc2VuZCgndGVzdGluZycpO1xyXG59KVxyXG4vL1xyXG4vLyBUd2l0dGVyIEFQSVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgdHdpdCA9IG5ldyB0d2l0dGVyKGNvbmZpZy5hdXRoLnR3aXR0ZXIpO1xyXG5cclxuLy8gQ3JlYXRlIHR3aXR0ZXIgc3RyZWFtXHJcbnR3aXQuc3RyZWFtKCdzdGF0dXNlcy9maWx0ZXInLHsgdHJhY2s6ICdnaXJsc2NvdXRzLGdpcmxndWlkZXNjYW5hZGEsZ2lybGd1aWRlcyxnaXJsZ3VpZGVzY29va2llcyxteXBsYW5ldCd9LCBmdW5jdGlvbihzdHJlYW0pe1xyXG4gIHN0cmVhbUhhbmRsZXIoc3RyZWFtKTtcclxufSk7XHJcblxyXG4vLyBUd2l0dGVyIGFuZCBXYXRzb24gVXR0ZXJhbmNlcyBUb25lIEpTT04gZW5kcG9pbnRcclxuLy8gR28gdG8gbG9jYWxob3N0OjMwMDAvcGFnZS8wLzBcclxuYXBwLmdldCgnL3BhZ2UvOnBhZ2UvOnNraXAnLCBmdW5jdGlvbihyZXEsIHJlcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMpXHJcbiAgLy8gRmV0Y2ggdHdlZXRzIGJ5IHBhZ2UgdmlhIHBhcmFtXHJcbiAgVHdlZXQuZ2V0VHdlZXRzKDAsIDAsIGZ1bmN0aW9uKHR3ZWV0cykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1RIRSBUV0VFVFMnLCB0d2VldHMpO1xyXG5cclxuICAgIC8vIEluc3RhbnRpYXRlIG5ldyB1dHRlcmFuY2VzT2JqIHRvIG1hdGNoIHJlcXVpcmVkIGludGFrZSBwYXJhbXNcclxuICAgIC8vIG9mIFdhdHNvbiBBUElcclxuICAgIGxldCB1dHRlcmFuY2VzT2JqID0ge1xyXG4gICAgICB1dHRlcmFuY2VzOiB0d2VldHMubWFwKHR3ZWV0ID0+ICh7XHJcbiAgICAgICAgdGV4dDogdHdlZXQuYm9keVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcblxyXG4gICAgdG9uZV9hbmFseXplci50b25lX2NoYXQodXR0ZXJhbmNlc09iaiwgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChlcnJvcilcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIHJlcy5zZW5kKDUwMCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMikpO1xyXG5cclxuICAgICAgICB2YXIgdXR0ZXJhbmNlc1RvbmUgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIGFzIGJvdGggdHdlZXRzIGFuZCB1dHRlcmFuY2VzIHRvbmUgYXMgSlNPTlxyXG4gICAgICAgIHJlcy5zZW5kKHt0d2VldHMsIHV0dGVyYW5jZXNUb25lfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nIG1pZGRsZXdhcmVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuYXBwLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjc3MgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gVW5pdmVyc2FsIEhUVFAgY2xpZW50XHJcbiAgICBjb25zdCBmZXRjaCA9IGNyZWF0ZUZldGNoKG5vZGVGZXRjaCwge1xyXG4gICAgICBiYXNlVXJsOiBjb25maWcuYXBpLnNlcnZlclVybCxcclxuICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIHVzZXI6IHJlcS51c2VyIHx8IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCB7XHJcbiAgICAgIGZldGNoLFxyXG4gICAgICAvLyBJIHNob3VsZCBub3QgdXNlIGBoaXN0b3J5YCBvbiBzZXJ2ZXIuLiBidXQgaG93IEkgZG8gcmVkaXJlY3Rpb24/IGZvbGxvdyB1bml2ZXJzYWwtcm91dGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgc2V0UnVudGltZVZhcmlhYmxlKHtcclxuICAgICAgICBuYW1lOiAnaW5pdGlhbE5vdycsXHJcbiAgICAgICAgdmFsdWU6IERhdGUubm93KCksXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBHbG9iYWwgKGNvbnRleHQpIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBlYXNpbHkgYWNjZXNzZWQgZnJvbSBhbnkgUmVhY3QgY29tcG9uZW50XHJcbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxyXG4gICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXHJcbiAgICAgIGluc2VydENzczogKC4uLnN0eWxlcykgPT4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IGNzcy5hZGQoc3R5bGUuX2dldENzcygpKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZldGNoLFxyXG4gICAgICAvLyBZb3UgY2FuIGFjY2VzcyByZWR1eCB0aHJvdWdoIHJlYWN0LXJlZHV4IGNvbm5lY3RcclxuICAgICAgc3RvcmUsXHJcbiAgICAgIHN0b3JlU3Vic2NyaXB0aW9uOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IHJvdXRlci5yZXNvbHZlKHtcclxuICAgICAgLi4uY29udGV4dCxcclxuICAgICAgcGF0aDogcmVxLnBhdGgsXHJcbiAgICAgIHF1ZXJ5OiByZXEucXVlcnksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocm91dGUucmVkaXJlY3QpIHtcclxuICAgICAgcmVzLnJlZGlyZWN0KHJvdXRlLnN0YXR1cyB8fCAzMDIsIHJvdXRlLnJlZGlyZWN0KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJvdXRlIH07XHJcbiAgICBkYXRhLmNoaWxkcmVuID0gUmVhY3RET00ucmVuZGVyVG9TdHJpbmcoXHJcbiAgICAgIDxBcHAgY29udGV4dD17Y29udGV4dH0gc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICB7cm91dGUuY29tcG9uZW50fVxyXG4gICAgICA8L0FwcD4sXHJcbiAgICApO1xyXG4gICAgZGF0YS5zdHlsZXMgPSBbeyBpZDogJ2NzcycsIGNzc1RleHQ6IFsuLi5jc3NdLmpvaW4oJycpIH1dO1xyXG4gICAgZGF0YS5zY3JpcHRzID0gW2Fzc2V0cy52ZW5kb3IuanNdO1xyXG4gICAgaWYgKHJvdXRlLmNodW5rcykge1xyXG4gICAgICBkYXRhLnNjcmlwdHMucHVzaCguLi5yb3V0ZS5jaHVua3MubWFwKGNodW5rID0+IGFzc2V0c1tjaHVua10uanMpKTtcclxuICAgIH1cclxuICAgIGRhdGEuc2NyaXB0cy5wdXNoKGFzc2V0cy5jbGllbnQuanMpO1xyXG4gICAgZGF0YS5hcHAgPSB7XHJcbiAgICAgIGFwaVVybDogY29uZmlnLmFwaS5jbGllbnRVcmwsXHJcbiAgICAgIHN0YXRlOiBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cCg8SHRtbCB7Li4uZGF0YX0gLz4pO1xyXG4gICAgcmVzLnN0YXR1cyhyb3V0ZS5zdGF0dXMgfHwgMjAwKTtcclxuICAgIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBuZXh0KGVycik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vXHJcbi8vIEVycm9yIGhhbmRsaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHBlID0gbmV3IFByZXR0eUVycm9yKCk7XHJcbnBlLnNraXBOb2RlRmlsZXMoKTtcclxucGUuc2tpcFBhY2thZ2UoJ2V4cHJlc3MnKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihwZS5yZW5kZXIoZXJyKSk7XHJcbiAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKFxyXG4gICAgPEh0bWxcclxuICAgICAgdGl0bGU9XCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIlxyXG4gICAgICBkZXNjcmlwdGlvbj17ZXJyLm1lc3NhZ2V9XHJcbiAgICAgIHN0eWxlcz17W3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBlcnJvclBhZ2VTdHlsZS5fZ2V0Q3NzKCkgfV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuICAgID5cclxuICAgICAge1JlYWN0RE9NLnJlbmRlclRvU3RyaW5nKDxFcnJvclBhZ2VXaXRob3V0U3R5bGUgZXJyb3I9e2Vycn0gLz4pfVxyXG4gICAgPC9IdG1sPixcclxuICApO1xyXG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XHJcbn0pO1xyXG5cclxuLy9cclxuLy8gTGF1bmNoIHRoZSBzZXJ2ZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgcHJvbWlzZSA9IG1vZGVscy5zeW5jKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKSk7XHJcbmlmICghbW9kdWxlLmhvdCkge1xyXG4gIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICBhcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhgVGhlIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtjb25maWcucG9ydH0vYCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy9cclxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIGFwcC5ob3QgPSBtb2R1bGUuaG90O1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3JvdXRlcicpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=