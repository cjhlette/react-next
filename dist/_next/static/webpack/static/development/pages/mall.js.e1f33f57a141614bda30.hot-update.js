webpackHotUpdate("static/development/pages/mall.js",{

/***/ "../node_modules/cheeseburger-menu/dist/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/cheeseburger-menu/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "../node_modules/react/index.js"), __webpack_require__(/*! react-easy-swipe */ "../node_modules/react-easy-swipe/lib/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (  true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(1);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-easy-swipe"
var external_react_easy_swipe_ = __webpack_require__(3);
var external_react_easy_swipe_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_swipe_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/styles.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var overlayStyle = function overlayStyle(options) {
  return {
    position: 'fixed',
    top: options.topOffset,
    bottom: options.bottomOffset,
    left: 0,
    right: 0,
    zIndex: 1001,
    background: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: "opacity ".concat(options.transitionTime, "s, transform 0s ").concat(options.transitionTime, "s"),
    transform: "translate3d(".concat(options.isLeft ? '' : '-', "100%, 0px, 0px)")
  };
};
var overlayActiveStyle = function overlayActiveStyle(options) {
  return _objectSpread({}, overlayStyle(options), {
    opacity: 1,
    transition: "opacity ".concat(options.transitionTime, "s"),
    transform: 'none'
  });
};
var menuOuterStyle = function menuOuterStyle(options) {
  return {
    position: 'fixed',
    left: options.isLeft ? 0 : 'inherit',
    right: options.isLeft ? 'inherit' : 0,
    top: options.topOffset,
    bottom: options.bottomOffset,
    zIndex: 1002,
    width: options.width,
    maxWidth: '80%',
    transition: "transform ".concat(options.transitionTime, "s"),
    transform: getSkew(options) + "translate3d(".concat(options.isLeft ? '-' : '', "100%, 0px, 0px)"),
    transformOrigin: 'left',
    backgroundColor: options.backgroundColor
  };
};
var menuOuterActiveStyle = function menuOuterActiveStyle(options) {
  return _objectSpread({}, menuOuterStyle(options), {
    transform: getSkew(options) + 'translate3d(0px, 0px, 0px)'
  });
};
var menuShadowStyle = function menuShadowStyle(options) {
  return {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    transition: "opacity ".concat(options.transitionTime, "s"),
    boxShadow: options.showShadow ? '0 0 15px 0 rgba(0, 0, 0, .2)' : 'none',
    opacity: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
};
var menuShadowActiveStyle = function menuShadowActiveStyle(options) {
  return _objectSpread({}, menuShadowStyle(options), {
    opacity: 1
  });
};
var menuInnerStyle = function menuInnerStyle(options) {
  return {
    height: '100%',
    paddingBottom: options.topOffset,
    overflowY: 'auto'
  };
};
function getSkew(options) {
  return options.skewY ? "skewY(".concat(options.skewY, "deg) ") : '';
}
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var IDLE = 'idle';
var VERTICAL = 'vertical';
var HORIZONTAL = 'horizontal';

var src_CheeseburgerMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CheeseburgerMenu, _Component);

  function CheeseburgerMenu() {
    var _this;

    _classCallCheck(this, CheeseburgerMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheeseburgerMenu).call(this));
    _this.state = {
      swiping: false,
      direction: IDLE,
      swipePosition: {
        x: 0,
        y: 0
      },
      menuExtraStyle: {}
    };
    _this.onSwipeStart = _this.onSwipeStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSwipeMove = _this.onSwipeMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSwipeEnd = _this.onSwipeEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CheeseburgerMenu, [{
    key: "onSwipeStart",
    value: function onSwipeStart(event) {
      if (this.props.isOpen) {
        this.setState({
          swiping: true
        });
      }
    }
  }, {
    key: "onSwipeMove",
    value: function onSwipeMove(position, event) {
      if (this.state.swiping) {
        var options = this.getOptions();
        var direction = this.state.direction;

        if (direction === IDLE) {
          var swipeThreshold = options.width / 15;
          var pastThreshold = Math.abs(position.x) > swipeThreshold || Math.abs(position.y) > swipeThreshold;

          if (pastThreshold) {
            if ((!this.props.right && position.x < 0 || this.props.right && position.x > 0) && Math.abs(position.x) > Math.abs(position.y)) {
              direction = HORIZONTAL;
            } else {
              direction = VERTICAL;
            }
          }
        }

        if (direction === HORIZONTAL) {
          var swipeClosing = !this.props.right && position.x < 0 || this.props.right && position.x > 0;
          var translateX = swipeClosing ? position.x : 0;
          this.setState({
            direction: direction,
            swipePosition: position,
            menuExtraStyle: {
              transform: getSkew(options) + "translate3d(".concat(translateX, "px, 0px, 0px)"),
              transition: 'transform 0s'
            }
          });
          event.preventDefault();
        }

        if (direction === VERTICAL) {
          this.setState({
            direction: direction,
            swipePosition: {
              x: 0,
              y: 0
            },
            menuExtraStyle: {}
          });
        }
      }
    }
  }, {
    key: "onSwipeEnd",
    value: function onSwipeEnd(event) {
      var swipeCloseThreshold = this.getOptions().width / 3;

      if (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold || this.props.right && this.state.swipePosition.x > swipeCloseThreshold) {
        this.props.closeCallback();
      }

      this.setState({
        swiping: false,
        direction: IDLE,
        swipePosition: {
          x: 0,
          y: 0
        },
        menuExtraStyle: {}
      });
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return {
        isLeft: !this.props.right,
        transitionTime: this.props.transitionTime || 0.3,
        topOffset: this.props.topOffset || 0,
        bottomOffset: this.props.bottomOffset || 0,
        width: this.props.width || 300,
        backgroundColor: this.props.backgroundColor || 'white',
        showShadow: !this.props.noShadow,
        skewY: this.props.skewY
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          closeCallback = _this$props.closeCallback,
          className = _this$props.className,
          overlayClassName = _this$props.overlayClassName,
          outerClassName = _this$props.outerClassName,
          innerClassName = _this$props.innerClassName,
          shadowClassName = _this$props.shadowClassName,
          children = _this$props.children;
      var options = this.getOptions();
      var baseMenuOuterStyle = isOpen ? menuOuterActiveStyle(options) : menuOuterStyle(options);

      var currentMenuOuterStyle = src_objectSpread({}, baseMenuOuterStyle, this.state.menuExtraStyle);

      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu', className, {
          open: isOpen
        })
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-overlay', overlayClassName),
        style: isOpen ? overlayActiveStyle(options) : overlayStyle(options),
        onClick: closeCallback
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_react_easy_swipe_default.a, {
        onSwipeStart: this.onSwipeStart,
        onSwipeMove: this.onSwipeMove,
        onSwipeEnd: this.onSwipeEnd
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-outer', outerClassName),
        style: currentMenuOuterStyle
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-inner', innerClassName),
        style: menuInnerStyle(options)
      }, children), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-shadow', shadowClassName),
        style: isOpen ? menuShadowActiveStyle(options) : menuShadowStyle(options)
      }))));
    }
  }]);

  return CheeseburgerMenu;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

src_CheeseburgerMenu.propTypes = {
  isOpen: external_prop_types_default.a.bool.isRequired,
  closeCallback: external_prop_types_default.a.func.isRequired,
  right: external_prop_types_default.a.bool,
  transitionTime: external_prop_types_default.a.number,
  topOffset: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  bottomOffset: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  width: external_prop_types_default.a.number,
  backgroundColor: external_prop_types_default.a.string,
  skewY: external_prop_types_default.a.number,
  noShadow: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string,
  overlayClassName: external_prop_types_default.a.string,
  outerClassName: external_prop_types_default.a.string,
  innerClassName: external_prop_types_default.a.string,
  shadowClassName: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node
};
/* harmony default export */ var src = __webpack_exports__["default"] = (src_CheeseburgerMenu);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/cheeseburger-menu/index.js":
/*!**************************************************!*\
  !*** ../node_modules/cheeseburger-menu/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CheeseburgerMenu = __webpack_require__(/*! ./dist/index */ "../node_modules/cheeseburger-menu/dist/index.js");

module.exports = CheeseburgerMenu;


/***/ }),

/***/ "../node_modules/react-easy-swipe/lib/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-easy-swipe/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "../node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "../node_modules/react-easy-swipe/lib/react-swipe.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "../node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener("test", null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {}

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: function ref(node) {
              return _this2.swiper = node;
            },
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lib/analytics/analytics */ "./lib/analytics/analytics.ts");












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
        Object(_lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_11__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_lib_analytics_analytics__WEBPACK_IMPORTED_MODULE_11__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("title", null, this.props.title)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](cheeseburger_menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
        isOpen: this.state.menuOpen,
        closeCallback: this.closeMenu.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](MenuContent, {
        closeCallback: this.closeMenu.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("article", {
        className: _styles_layout_scss__WEBPACK_IMPORTED_MODULE_6__["base_main"]
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("article", {
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
//# sourceMappingURL=mall.js.e1f33f57a141614bda30.hot-update.js.map