require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/entry/Entry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medium_editor_dist_css_medium_editor_css__ = __webpack_require__("./node_modules/medium-editor/dist/css/medium-editor.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_medium_editor_dist_css_medium_editor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_medium_editor_dist_css_medium_editor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_editor_dist_css_themes_default_css__ = __webpack_require__("./node_modules/medium-editor/dist/css/themes/default.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_editor_dist_css_themes_default_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_medium_editor_dist_css_themes_default_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_springy_parallax__ = __webpack_require__("react-springy-parallax");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_springy_parallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_springy_parallax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_medium_editor__ = __webpack_require__("react-medium-editor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_medium_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_medium_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
var _jsxFileName = 'C:\\Users\\Nick\\Documents\\Github\\MoodJournal\\src\\routes\\entry\\Entry.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*eslint-disable */












// Import Components
class Entry extends __WEBPACK_IMPORTED_MODULE_2_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getInitialState() {
    return { text: 'Fusce dapibus, tellus ac cursus commodo' };
  }
  handleChange(text, medium) {
    this.setState({ text: text });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      { className: 'app container', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        'How are you feeling today?'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        },
        'What do you want to call this?'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_medium_editor___default.a, {
        tag: 'pre',
        className: 'editor',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        text: this.state.text,
        onChange: this.handleChange,
        options: { toolbar: { buttons: ['bold', 'italic', 'underline'] } },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        },
        'Editor #2'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_medium_editor___default.a, { style: { height: 200 },
        text: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        },
        'Editor #3 (editing disabled)'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        'Useful for using the toolbar with customized buttons/actions'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_medium_editor___default.a, {
        style: { outline: 'dotted 1px', padding: 10 },
        text: this.state.text,
        options: { disableEditing: true, toolbar: false },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })
    );
  }
}

const mapStateToProps = state => ({ value: "toTimeString" });

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_0_medium_editor_dist_css_medium_editor_css___default.a, __WEBPACK_IMPORTED_MODULE_1_medium_editor_dist_css_themes_default_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps)(Entry)));

/*eslint-enable */

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjI2Y2MzNTU0YzlmYmFjMmQxMmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXHJvdXRlc1xcZW50cnlcXEVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxuLyplc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdtZWRpdW0tZWRpdG9yL2Rpc3QvY3NzL21lZGl1bS1lZGl0b3IuY3NzJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnbWVkaXVtLWVkaXRvci9kaXN0L2Nzcy90aGVtZXMvZGVmYXVsdC5jc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XHJcblxyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncmVhY3Qtc3ByaW5neS1wYXJhbGxheCc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAncmVhY3QtbWVkaXVtLWVkaXRvcic7XHJcbmltcG9ydCAqIGFzIGJzIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy8gSW1wb3J0IENvbXBvbmVudHNcclxuY2xhc3MgRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgIHJldHVybiB7IHRleHQ6ICdGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8nIH07XHJcbiAgICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHRleHQsIG1lZGl1bSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogdGV4dH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcCBjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+SG93IGFyZSB5b3UgZmVlbGluZyB0b2RheT88L2gxPlxyXG4gICAgICAgIDxoMz5XaGF0IGRvIHlvdSB3YW50IHRvIGNhbGwgdGhpcz88L2gzPlxyXG4gICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgIHRhZz1cInByZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0b3JcIlxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgb3B0aW9ucz17e3Rvb2xiYXI6IHtidXR0b25zOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddfX19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGgzPkVkaXRvciAjMjwvaDM+XHJcbiAgICAgICAgPEVkaXRvciBzdHlsZT17e2hlaWdodDogMjAwIH19XHJcbiAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGgzPkVkaXRvciAjMyAoZWRpdGluZyBkaXNhYmxlZCk8L2gzPlxyXG4gICAgICAgIDxwPlVzZWZ1bCBmb3IgdXNpbmcgdGhlIHRvb2xiYXIgd2l0aCBjdXN0b21pemVkIGJ1dHRvbnMvYWN0aW9uczwvcD5cclxuICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnZG90dGVkIDFweCcsIHBhZGRpbmc6IDEwIH19XHJcbiAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgICBvcHRpb25zPXt7ZGlzYWJsZUVkaXRpbmc6IHRydWUsIHRvb2xiYXI6IGZhbHNlIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHt2YWx1ZTogXCJ0b1RpbWVTdHJpbmdcIn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHRoZW1lKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRW50cnkpKTtcclxuXHJcbi8qZXNsaW50LWVuYWJsZSAqL1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9lbnRyeS9FbnRyeS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkE7QUE0QkE7QUFwREE7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=