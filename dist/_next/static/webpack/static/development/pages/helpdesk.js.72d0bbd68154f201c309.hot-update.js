webpackHotUpdate("static/development/pages/helpdesk.js",{

/***/ "../node_modules/react-hamburger-menu/dist/HamburgerMenu.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-hamburger-menu/dist/HamburgerMenu.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = HamburgerMenu;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HamburgerMenu(props) {
  var width = (props.width || 36) + "px",
      height = (props.height || 30) + "px",
      halfHeight = parseInt(height.replace('px', '')) / 2 + "px",
      isOpen = props.isOpen || false,
      strokeWidth = props.strokeWidth || 2,
      halfStrokeWidth = "-" + strokeWidth / 2 + "px",
      animationDuration = props.animationDuration || '0.4';

  var getTransformValue = function getTransformValue(isOpen, defaultPos, rotateVal) {
    return "translate3d(0," + (isOpen ? halfHeight : defaultPos) + ",0) rotate(" + (isOpen ? rotateVal + "deg" : '0') + ")";
  };

  var styles = {
    container: {
      width: width,
      height: height,
      position: 'relative',
      transform: "rotate(" + (props.rotate || 0) + "deg)"
    },
    lineBase: {
      display: 'block',
      height: strokeWidth + "px",
      width: '100%',
      background: props.color || '#000',
      transitionTimingFunction: 'ease',
      transitionDuration: animationDuration + "s",
      borderRadius: (props.borderRadius || 0) + "px",
      transformOrigin: 'center',
      position: 'absolute'
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth
    },
    secondLine: {
      transitionTimingFunction: 'ease-out',
      transitionDuration: animationDuration / 4 + "s",
      opacity: isOpen ? '0' : '1',
      top: halfHeight,
      marginTop: halfStrokeWidth
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: halfStrokeWidth
    }
  };
  return _react.default.createElement("div", {
    style: styles.container,
    onClick: props.menuClicked
  }, _react.default.createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.firstLine)
  }), _react.default.createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.secondLine)
  }), _react.default.createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.thirdLine)
  }));
}

;
HamburgerMenu.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  menuClicked: _propTypes.default.func.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  strokeWidth: _propTypes.default.number,
  rotate: _propTypes.default.number,
  color: _propTypes.default.string,
  borderRadius: _propTypes.default.number,
  animationDuration: _propTypes.default.number
};

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/layout.scss */ "./styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "../node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cheeseburger_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cheeseburger-menu */ "../node_modules/cheeseburger-menu/index.js");
/* harmony import */ var cheeseburger_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cheeseburger_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hamburger-menu */ "../node_modules/react-hamburger-menu/dist/HamburgerMenu.js");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lib/analytics/analytics */ "./lib/analytics/analytics.ts");













var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(_lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_12__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_12__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, this.props.title)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](cheeseburger_menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
        isOpen: this.state.menuOpen,
        closeCallback: this.closeMenu.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](MenuContent, {
        closeCallback: this.closeMenu.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_hamburger_menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
        isOpen: this.state.menuOpen,
        menuClicked: this.openMenu.bind(this),
        width: 32,
        height: 24,
        strokeWidth: 3,
        rotate: 0,
        color: "black",
        borderRadius: 0,
        animationDuration: 0.5
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("article", {
        className: _styles_layout_scss__WEBPACK_IMPORTED_MODULE_6__["base_main"]
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("article", {
        className: _styles_layout_scss__WEBPACK_IMPORTED_MODULE_6__["floating_menu"]
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
        type: "button",
        className: "ico1"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", null, "\uD648")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
        type: "button",
        className: "ico2"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", null, "\uC804\uCCB4\uBA54\uB274")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
        type: "button",
        className: "ico3"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", null, "\uC54C\uB9BC")), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
        type: "button",
        className: "ico4"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", null, "\uC571\uB2E4\uC6B4\uB85C\uB4DC"))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ })

})
//# sourceMappingURL=helpdesk.js.72d0bbd68154f201c309.hot-update.js.map