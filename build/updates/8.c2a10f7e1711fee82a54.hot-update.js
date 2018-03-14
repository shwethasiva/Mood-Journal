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
app.get('/test/test/test', function (req, res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LmMyYTEwZjdlMTcxMWZlZTgyYTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXHNlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgZXhwcmVzc0p3dCwgeyBVbmF1dGhvcml6ZWRFcnJvciBhcyBKd3Q0MDFFcnJvciB9IGZyb20gJ2V4cHJlc3Mtand0JztcclxuaW1wb3J0IGV4cHJlc3NHcmFwaFFMIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG5vZGVGZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcclxuaW1wb3J0IEh0bWwgZnJvbSAnLi9jb21wb25lbnRzL0h0bWwnO1xyXG5pbXBvcnQgeyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfSBmcm9tICcuL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UnO1xyXG5pbXBvcnQgZXJyb3JQYWdlU3R5bGUgZnJvbSAnLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVGZXRjaCBmcm9tICcuL2NyZWF0ZUZldGNoJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJy4vcGFzc3BvcnQnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcclxuaW1wb3J0IG1vZGVscyBmcm9tICcuL2RhdGEvbW9kZWxzJztcclxuaW1wb3J0IHNjaGVtYSBmcm9tICcuL2RhdGEvc2NoZW1hJztcclxuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cy5qc29uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IHNldFJ1bnRpbWVWYXJpYWJsZSB9IGZyb20gJy4vYWN0aW9ucy9ydW50aW1lJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG4vLyBJbXBvcnQgTW9uZ29vc2UgJiB0d2l0dGVyXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gJ3R3aXR0ZXInO1xyXG5cclxuLy8gSW1wb3J0IFRvbmUgQW5hbHl6ZXIgV2F0c29uIEFQSVxyXG5pbXBvcnQgVG9uZUFuYWx5emVyVjMgZnJvbSAnd2F0c29uLWRldmVsb3Blci1jbG91ZC90b25lLWFuYWx5emVyL3YzJztcclxuXHJcbi8vIFJlcXVpcmUgVHdlZXQgU2NoZW1hXHJcbmltcG9ydCBUd2VldCBmcm9tICcuL2RhdGEvbW9kZWxzL21vbmdvZGIvVHdlZXQnXHJcbi8vcmVxdWlyZSBFbnRyeSBTY2hlbWFcclxuaW1wb3J0IEVudHJ5IGZyb20gJy4vZGF0YS9tb2RlbHMvbW9uZ29kYi9FbnRyeSdcclxuaW1wb3J0IHN0cmVhbUhhbmRsZXIgZnJvbSAnLi9kYXRhL3V0aWxzL3N0cmVhbUhhbmRsZXInO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy9cclxuLy8gVG9uZSBBbmFseXplciBXYXRzb24gQVBJXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmxldCB0b25lX2FuYWx5emVyID0gbmV3IFRvbmVBbmFseXplclYzKGNvbmZpZy5hdXRoLndhdHNvbik7XHJcbi8vXHJcbi8vIFRlbGwgYW55IENTUyB0b29saW5nIChzdWNoIGFzIE1hdGVyaWFsIFVJKSB0byB1c2UgYWxsIHZlbmRvciBwcmVmaXhlcyBpZiB0aGVcclxuLy8gdXNlciBhZ2VudCBpcyBub3Qga25vd24uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmdsb2JhbC5uYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yIHx8IHt9O1xyXG5nbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCA9IGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICdhbGwnO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgTm9kZS5qcyBtaWRkbGV3YXJlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcblxyXG4vL1xyXG4vLyBBdXRoZW50aWNhdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKFxyXG4gIGV4cHJlc3NKd3Qoe1xyXG4gICAgc2VjcmV0OiBjb25maWcuYXV0aC5qd3Quc2VjcmV0LFxyXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2UsXHJcbiAgICBnZXRUb2tlbjogcmVxID0+IHJlcS5jb29raWVzLmlkX3Rva2VuLFxyXG4gIH0pLFxyXG4pO1xyXG4vLyBFcnJvciBoYW5kbGVyIGZvciBleHByZXNzLWp3dFxyXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIGlmIChlcnIgaW5zdGFuY2VvZiBKd3Q0MDFFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2V4cHJlc3Mtand0LWVycm9yXScsIHJlcS5jb29raWVzLmlkX3Rva2VuKTtcclxuICAgIC8vIGBjbGVhckNvb2tpZWAsIG90aGVyd2lzZSB1c2VyIGNhbid0IHVzZSB3ZWItYXBwIHVudGlsIGNvb2tpZSBleHBpcmVzXHJcbiAgICByZXMuY2xlYXJDb29raWUoJ2lkX3Rva2VuJyk7XHJcbiAgfVxyXG4gIG5leHQoZXJyKTtcclxufSk7XHJcblxyXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcblxyXG5pZiAoX19ERVZfXykge1xyXG4gIGFwcC5lbmFibGUoJ3RydXN0IHByb3h5Jyk7XHJcbn1cclxuYXBwLmdldChcclxuICAnL2xvZ2luL2ZhY2Vib29rJyxcclxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2ZhY2Vib29rJywge1xyXG4gICAgc2NvcGU6IFsnZW1haWwnLCAndXNlcl9sb2NhdGlvbiddLFxyXG4gICAgc2Vzc2lvbjogZmFsc2UsXHJcbiAgfSksXHJcbik7XHJcbmFwcC5nZXQoXHJcbiAgJy9sb2dpbi9mYWNlYm9vay9yZXR1cm4nLFxyXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7XHJcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxyXG4gICAgc2Vzc2lvbjogZmFsc2UsXHJcbiAgfSksXHJcbiAgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcmVzSW4gPSA2MCAqIDYwICogMjQgKiAxODA7IC8vIDE4MCBkYXlzXHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlcS51c2VyLCBjb25maWcuYXV0aC5qd3Quc2VjcmV0LCB7IGV4cGlyZXNJbiB9KTtcclxuICAgIHJlcy5jb29raWUoJ2lkX3Rva2VuJywgdG9rZW4sIHsgbWF4QWdlOiAxMDAwICogZXhwaXJlc0luLCBodHRwT25seTogdHJ1ZSB9KTtcclxuICAgIHJlcy5yZWRpcmVjdCgnLycpO1xyXG4gIH0sXHJcbik7XHJcblxyXG4vL1xyXG4vLyBSZWdpc3RlciBBUEkgbWlkZGxld2FyZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKFxyXG4gICcvZ3JhcGhxbCcsXHJcbiAgZXhwcmVzc0dyYXBoUUwocmVxID0+ICh7XHJcbiAgICBzY2hlbWEsXHJcbiAgICBncmFwaGlxbDogX19ERVZfXyxcclxuICAgIHJvb3RWYWx1ZTogeyByZXF1ZXN0OiByZXEgfSxcclxuICAgIHByZXR0eTogX19ERVZfXyxcclxuICB9KSksXHJcbik7XHJcblxyXG4vL1xyXG4vLyBDb25uZWN0IHRvIE1vbmdvREJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9zZXQgdXAgYSBkYXRhYmFzZSBvbiB5b3VyIGxvY2FsIG1hY2hpbmUgdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSB1cmwgYmVsb3dcclxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9tb29kLWpvdXJuYWwnKTtcclxubGV0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHJcbmRiLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgRXJyb3I6ICcsIGVycik7XHJcbn0pO1xyXG5cclxuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsLicpO1xyXG59KTtcclxuLy90ZXN0aW5nIHJvdXRlLlxyXG5hcHAuZ2V0KCcvdGVzdC90ZXN0L3Rlc3QnLCBmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgRW50cnkuZ2V0QWxsKHt9LCAwLCBmdW5jdGlvbihlbnRyaWVzKXtcclxuICAgIGNvbnNvbGUubG9nKGVudHJpZXMpO1xyXG4gICAgcmVzLnNlbmQoZW50cmllcyk7XHJcbiAgfSk7XHJcbiAgcmVzLnNlbmQoJ3Rlc3RpbmcnKTtcclxufSlcclxuLy9cclxuLy8gVHdpdHRlciBBUElcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxubGV0IHR3aXQgPSBuZXcgdHdpdHRlcihjb25maWcuYXV0aC50d2l0dGVyKTtcclxuXHJcbi8vIENyZWF0ZSB0d2l0dGVyIHN0cmVhbVxyXG50d2l0LnN0cmVhbSgnc3RhdHVzZXMvZmlsdGVyJyx7IHRyYWNrOiAnZ2lybHNjb3V0cyxnaXJsZ3VpZGVzY2FuYWRhLGdpcmxndWlkZXMsZ2lybGd1aWRlc2Nvb2tpZXMsbXlwbGFuZXQnfSwgZnVuY3Rpb24oc3RyZWFtKXtcclxuICBzdHJlYW1IYW5kbGVyKHN0cmVhbSk7XHJcbn0pO1xyXG5cclxuLy8gVHdpdHRlciBhbmQgV2F0c29uIFV0dGVyYW5jZXMgVG9uZSBKU09OIGVuZHBvaW50XHJcbi8vIEdvIHRvIGxvY2FsaG9zdDozMDAwL3BhZ2UvMC8wXHJcbmFwcC5nZXQoJy9wYWdlLzpwYWdlLzpza2lwJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICAvLyBjb25zb2xlLmxvZyhyZXEucGFyYW1zKVxyXG4gIC8vIEZldGNoIHR3ZWV0cyBieSBwYWdlIHZpYSBwYXJhbVxyXG4gIFR3ZWV0LmdldFR3ZWV0cygwLCAwLCBmdW5jdGlvbih0d2VldHMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdUSEUgVFdFRVRTJywgdHdlZXRzKTtcclxuXHJcbiAgICAvLyBJbnN0YW50aWF0ZSBuZXcgdXR0ZXJhbmNlc09iaiB0byBtYXRjaCByZXF1aXJlZCBpbnRha2UgcGFyYW1zXHJcbiAgICAvLyBvZiBXYXRzb24gQVBJXHJcbiAgICBsZXQgdXR0ZXJhbmNlc09iaiA9IHtcclxuICAgICAgdXR0ZXJhbmNlczogdHdlZXRzLm1hcCh0d2VldCA9PiAoe1xyXG4gICAgICAgIHRleHQ6IHR3ZWV0LmJvZHlcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG5cclxuICAgIHRvbmVfYW5hbHl6ZXIudG9uZV9jaGF0KHV0dGVyYW5jZXNPYmosIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgICBpZiAoZXJyb3IpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAvLyByZXMuc2VuZCg1MDApO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpKTtcclxuXHJcbiAgICAgICAgdmFyIHV0dGVyYW5jZXNUb25lID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbmRlciBhcyBib3RoIHR3ZWV0cyBhbmQgdXR0ZXJhbmNlcyB0b25lIGFzIEpTT05cclxuICAgICAgICByZXMuc2VuZCh7dHdlZXRzLCB1dHRlcmFuY2VzVG9uZX0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vXHJcbi8vIFJlZ2lzdGVyIHNlcnZlci1zaWRlIHJlbmRlcmluZyBtaWRkbGV3YXJlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFwcC5nZXQoJyonLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY3NzID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxyXG4gICAgY29uc3QgZmV0Y2ggPSBjcmVhdGVGZXRjaChub2RlRmV0Y2gsIHtcclxuICAgICAgYmFzZVVybDogY29uZmlnLmFwaS5zZXJ2ZXJVcmwsXHJcbiAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICB1c2VyOiByZXEudXNlciB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwge1xyXG4gICAgICBmZXRjaCxcclxuICAgICAgLy8gSSBzaG91bGQgbm90IHVzZSBgaGlzdG9yeWAgb24gc2VydmVyLi4gYnV0IGhvdyBJIGRvIHJlZGlyZWN0aW9uPyBmb2xsb3cgdW5pdmVyc2FsLXJvdXRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHNldFJ1bnRpbWVWYXJpYWJsZSh7XHJcbiAgICAgICAgbmFtZTogJ2luaXRpYWxOb3cnLFxyXG4gICAgICAgIHZhbHVlOiBEYXRlLm5vdygpLFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gR2xvYmFsIChjb250ZXh0KSB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgZWFzaWx5IGFjY2Vzc2VkIGZyb20gYW55IFJlYWN0IGNvbXBvbmVudFxyXG4gICAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9jb250ZXh0Lmh0bWxcclxuICAgIGNvbnN0IGNvbnRleHQgPSB7XHJcbiAgICAgIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxyXG4gICAgICBpbnNlcnRDc3M6ICguLi5zdHlsZXMpID0+IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiBjc3MuYWRkKHN0eWxlLl9nZXRDc3MoKSkpO1xyXG4gICAgICB9LFxyXG4gICAgICBmZXRjaCxcclxuICAgICAgLy8gWW91IGNhbiBhY2Nlc3MgcmVkdXggdGhyb3VnaCByZWFjdC1yZWR1eCBjb25uZWN0XHJcbiAgICAgIHN0b3JlLFxyXG4gICAgICBzdG9yZVN1YnNjcmlwdGlvbjogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCByb3V0ZXIucmVzb2x2ZSh7XHJcbiAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgIHBhdGg6IHJlcS5wYXRoLFxyXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XHJcbiAgICAgIHJlcy5yZWRpcmVjdChyb3V0ZS5zdGF0dXMgfHwgMzAyLCByb3V0ZS5yZWRpcmVjdCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0geyAuLi5yb3V0ZSB9O1xyXG4gICAgZGF0YS5jaGlsZHJlbiA9IFJlYWN0RE9NLnJlbmRlclRvU3RyaW5nKFxyXG4gICAgICA8QXBwIGNvbnRleHQ9e2NvbnRleHR9IHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAge3JvdXRlLmNvbXBvbmVudH1cclxuICAgICAgPC9BcHA+LFxyXG4gICAgKTtcclxuICAgIGRhdGEuc3R5bGVzID0gW3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBbLi4uY3NzXS5qb2luKCcnKSB9XTtcclxuICAgIGRhdGEuc2NyaXB0cyA9IFthc3NldHMudmVuZG9yLmpzXTtcclxuICAgIGlmIChyb3V0ZS5jaHVua3MpIHtcclxuICAgICAgZGF0YS5zY3JpcHRzLnB1c2goLi4ucm91dGUuY2h1bmtzLm1hcChjaHVuayA9PiBhc3NldHNbY2h1bmtdLmpzKSk7XHJcbiAgICB9XHJcbiAgICBkYXRhLnNjcmlwdHMucHVzaChhc3NldHMuY2xpZW50LmpzKTtcclxuICAgIGRhdGEuYXBwID0ge1xyXG4gICAgICBhcGlVcmw6IGNvbmZpZy5hcGkuY2xpZW50VXJsLFxyXG4gICAgICBzdGF0ZTogY29udGV4dC5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoPEh0bWwgey4uLmRhdGF9IC8+KTtcclxuICAgIHJlcy5zdGF0dXMocm91dGUuc3RhdHVzIHx8IDIwMCk7XHJcbiAgICByZXMuc2VuZChgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgbmV4dChlcnIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL1xyXG4vLyBFcnJvciBoYW5kbGluZ1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBwZSA9IG5ldyBQcmV0dHlFcnJvcigpO1xyXG5wZS5za2lwTm9kZUZpbGVzKCk7XHJcbnBlLnNraXBQYWNrYWdlKCdleHByZXNzJyk7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnNvbGUuZXJyb3IocGUucmVuZGVyKGVycikpO1xyXG4gIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChcclxuICAgIDxIdG1sXHJcbiAgICAgIHRpdGxlPVwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCJcclxuICAgICAgZGVzY3JpcHRpb249e2Vyci5tZXNzYWdlfVxyXG4gICAgICBzdHlsZXM9e1t7IGlkOiAnY3NzJywgY3NzVGV4dDogZXJyb3JQYWdlU3R5bGUuX2dldENzcygpIH1dfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXHJcbiAgICA+XHJcbiAgICAgIHtSZWFjdERPTS5yZW5kZXJUb1N0cmluZyg8RXJyb3JQYWdlV2l0aG91dFN0eWxlIGVycm9yPXtlcnJ9IC8+KX1cclxuICAgIDwvSHRtbD4sXHJcbiAgKTtcclxuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICByZXMuc2VuZChgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWApO1xyXG59KTtcclxuXHJcbi8vXHJcbi8vIExhdW5jaCB0aGUgc2VydmVyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHByb21pc2UgPSBtb2RlbHMuc3luYygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVyci5zdGFjaykpO1xyXG5pZiAoIW1vZHVsZS5ob3QpIHtcclxuICBwcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgYXBwLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmluZm8oYFRoZSBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vXHJcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICBhcHAuaG90ID0gbW9kdWxlLmhvdDtcclxuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yb3V0ZXInKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NlcnZlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9