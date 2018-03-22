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
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        },
        this.state.text
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
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
          lineNumber: 53
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
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
          lineNumber: 64
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'h3',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
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
            lineNumber: 70
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
          lineNumber: 71
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjA5ZWQ2YzQ3ZGUyZjVkYjY0NzkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmlja1xcRG9jdW1lbnRzXFxHaXRodWJcXE1vb2RKb3VybmFsXFxzcmNcXHJvdXRlc1xcZW50cnlcXEVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxuLyplc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdtZWRpdW0tZWRpdG9yL2Rpc3QvY3NzL21lZGl1bS1lZGl0b3IuY3NzJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnbWVkaXVtLWVkaXRvci9kaXN0L2Nzcy90aGVtZXMvZGVmYXVsdC5jc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XHJcblxyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncmVhY3Qtc3ByaW5neS1wYXJhbGxheCc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAncmVhY3QtbWVkaXVtLWVkaXRvcic7XHJcbmltcG9ydCAqIGFzIGJzIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy8gSW1wb3J0IENvbXBvbmVudHNcclxuY2xhc3MgRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgIHJldHVybiB7IHRleHQ6ICdGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8nIH07XHJcbiAgICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHRleHQsIG1lZGl1bSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogdGV4dH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcCBjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+SG93IGFyZSB5b3UgZmVlbGluZyB0b2RheT88L2gxPlxyXG4gICAgICAgIDxkaXY+e3RoaXMuc3RhdGUudGV4dH08L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPldoYXQgZG8geW91IHdhbnQgdG8gY2FsbCB0aGlzPzwvaDM+XHJcbiAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgdGFnPVwicHJlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRvclwiXHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBvcHRpb25zPXt7dG9vbGJhcjoge2J1dHRvbnM6IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ119fX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aDM+RWRpdG9yICMyPC9oMz5cclxuICAgICAgICA8RWRpdG9yIHN0eWxlPXt7aGVpZ2h0OiAyMDAgfX1cclxuICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUudGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aDM+RWRpdG9yICMzIChlZGl0aW5nIGRpc2FibGVkKTwvaDM+XHJcbiAgICAgICAgPHA+VXNlZnVsIGZvciB1c2luZyB0aGUgdG9vbGJhciB3aXRoIGN1c3RvbWl6ZWQgYnV0dG9ucy9hY3Rpb25zPC9wPlxyXG4gICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdkb3R0ZWQgMXB4JywgcGFkZGluZzogMTAgfX1cclxuICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUudGV4dH1cclxuICAgICAgICAgIG9wdGlvbnM9e3tkaXNhYmxlRWRpdGluZzogdHJ1ZSwgdG9vbGJhcjogZmFsc2UgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe3ZhbHVlOiBcInRvVGltZVN0cmluZ1wifSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgdGhlbWUpKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFbnRyeSkpO1xyXG5cclxuLyplc2xpbnQtZW5hYmxlICovXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2VudHJ5L0VudHJ5LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkE7QUE4QkE7QUF0REE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=