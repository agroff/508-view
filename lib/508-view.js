(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("508-view", [], factory);
	else if(typeof exports === 'object')
		exports["508-view"] = factory();
	else
		root["508-view"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BaseFeature.js":
/*!****************************!*\
  !*** ./src/BaseFeature.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseFeature =
/*#__PURE__*/
function () {
  function BaseFeature(config) {
    _classCallCheck(this, BaseFeature);

    this.config = config;
    this.featureName = "";
  }

  _createClass(BaseFeature, [{
    key: "optionEnabled",
    value: function optionEnabled(optionName) {
      return this.config[optionName] === true;
    }
  }, {
    key: "writeStyleSheet",
    value: function writeStyleSheet(rulesArray) {
      var style = document.createElement("style"); // WebKit hack

      style.appendChild(document.createTextNode("")); // Add the <style> element to the page

      document.head.appendChild(style);
      rulesArray.forEach(function (rule) {
        style.sheet.insertRule(rule);
      });
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.optionEnabled(this.featureName);
    }
  }, {
    key: "run",
    value: function run() {
      console.error("BaseFeature.run is an abstract method. Please implement it.");
    }
  }]);

  return BaseFeature;
}();

exports.default = BaseFeature;
module.exports = exports["default"];

/***/ }),

/***/ "./src/features/DisplayAriaVisible.js":
/*!********************************************!*\
  !*** ./src/features/DisplayAriaVisible.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseFeature2 = _interopRequireDefault(__webpack_require__(/*! ../BaseFeature */ "./src/BaseFeature.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DisplayAriaVisible =
/*#__PURE__*/
function (_BaseFeature) {
  _inherits(DisplayAriaVisible, _BaseFeature);

  function DisplayAriaVisible(config) {
    var _this;

    _classCallCheck(this, DisplayAriaVisible);

    _this = _possibleConstructorReturn(this, (DisplayAriaVisible.__proto__ || Object.getPrototypeOf(DisplayAriaVisible)).call(this, config));
    _this.featureName = 'display-aria-visible';
    _this.skipTags = ["HEAD", "STYLE", "META", "TITLE", "SCRIPT", "LINK"];
    return _this;
  }

  _createClass(DisplayAriaVisible, [{
    key: "run",
    value: function run() {
      var _this2 = this;

      if (!this.isEnabled()) {
        return;
      }

      var displayIfAriaVisible = function displayIfAriaVisible(element) {
        if (_this2.skipTags.indexOf(element.tagName) !== -1) {
          return;
        }

        var display = window.getComputedStyle(element, null).getPropertyValue('display');
        var hasAria = element.hasAttribute("aria-hidden");
        var isAriaHidden = false;

        if (hasAria && element.getAttribute("aria-hidden") === "true") {
          isAriaHidden = true;
        }

        if (display === "none" && isAriaHidden === false) {
          var e = element;
          var label = e.tagName + '#' + e.getAttribute("id") + '.' + e.className;
          element.style.display = "block";
          console.log("Needs Aria Hidden: " + label);
        }
      };

      document.querySelectorAll("*").forEach(displayIfAriaVisible);
    }
  }]);

  return DisplayAriaVisible;
}(_BaseFeature2.default);

exports.default = DisplayAriaVisible;
module.exports = exports["default"];

/***/ }),

/***/ "./src/features/DisplayImageAltTags.js":
/*!*********************************************!*\
  !*** ./src/features/DisplayImageAltTags.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseFeature2 = _interopRequireDefault(__webpack_require__(/*! ../BaseFeature */ "./src/BaseFeature.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DisplayImageAltTags =
/*#__PURE__*/
function (_BaseFeature) {
  _inherits(DisplayImageAltTags, _BaseFeature);

  function DisplayImageAltTags(config) {
    var _this;

    _classCallCheck(this, DisplayImageAltTags);

    _this = _possibleConstructorReturn(this, (DisplayImageAltTags.__proto__ || Object.getPrototypeOf(DisplayImageAltTags)).call(this, config));
    _this.featureName = 'display-image-alts';
    return _this;
  }

  _createClass(DisplayImageAltTags, [{
    key: "appendAltTag",
    value: function appendAltTag(image, appendClass) {
      var cssClass = image.className + ' ' + appendClass;
      var alt = image.getAttribute("alt");
      var isBroken = false;

      if (image.hasAttribute('aria-hidden')) {
        return;
      }

      if (!alt) {
        cssClass += ' broken';
        alt = "Missing Alt!";
        isBroken = true;
      }

      if (!image.parentNode) {
        console.warn("Couldn't find parent node for image", image);
        return;
      }

      if (isBroken && !this.displayMissing) {
        return;
      }

      image.parentNode.innerHTML = '<div class="' + cssClass + '">' + alt + '</div>' + image.parentNode.innerHTML;
    }
  }, {
    key: "writeAltTagStyles",
    value: function writeAltTagStyles() {
      this.writeStyleSheet(["\n            div.alt-tag{\n                position: relative;\n                z-index:5;\n                text-align: center;\n                font-size: 18px;\n                border: 1px solid green;\n                background-color: #91ff9169 !important;\n                color: #000;\n                padding: 20px;\n                margin-top: 20px;\n                margin-bottom: -100px;\n            }\n            ", "\n            div.alt-tag.broken{\n                border: 1px solid #800006;\n                background-color: rgba(255, 102, 104, 0.47) !important;\n            }\n            "]);
    }
  }, {
    key: "generateAltTags",
    value: function generateAltTags() {
      var _this2 = this;

      document.querySelectorAll("img").forEach(function (image) {
        _this2.appendAltTag(image, 'alt-tag');
      });
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.isEnabled()) {
        return;
      }

      this.displayMissing = this.optionEnabled('display-missing-image-alts');
      this.writeAltTagStyles();
      this.generateAltTags();
    }
  }]);

  return DisplayImageAltTags;
}(_BaseFeature2.default);

exports.default = DisplayImageAltTags;
module.exports = exports["default"];

/***/ }),

/***/ "./src/features/StyleHelper.js":
/*!*************************************!*\
  !*** ./src/features/StyleHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseFeature2 = _interopRequireDefault(__webpack_require__(/*! ../BaseFeature */ "./src/BaseFeature.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StyleHelper =
/*#__PURE__*/
function (_BaseFeature) {
  _inherits(StyleHelper, _BaseFeature);

  function StyleHelper(config) {
    var _this;

    _classCallCheck(this, StyleHelper);

    _this = _possibleConstructorReturn(this, (StyleHelper.__proto__ || Object.getPrototypeOf(StyleHelper)).call(this, config));
    _this.featureName = '';
    return _this;
  }

  _createClass(StyleHelper, [{
    key: "showSrOnly",
    value: function showSrOnly() {
      this.writeStyleSheet(["\n        span.sr-only,\n        .sr-only{\n            position:relative !important;\n            border:1px solid #0017ff !important;\n            background-color: #9594ff !important;\n            height: auto !important;\n            width:auto !important;\n            clip:auto !important;\n            overflow:visible !important;\n            font-family: arial;\n            font-size:18px;\n            color:#000;\n        }\n        "]);
    }
  }, {
    key: "hideVisualElements",
    value: function hideVisualElements() {
      this.writeStyleSheet(["\n        img,canvas,video{\n            opacity : 0 !important;\n        }\n        ", "\n        *{\n            background-image: none !important;\n        }\n        "]);
    }
  }, {
    key: "highlightAriaInvisible",
    value: function highlightAriaInvisible() {
      this.writeStyleSheet(["\n        [aria-hidden=\"true\"]{\n            outline:10px solid red;\n        }\n        "]);
    }
  }, {
    key: "writeHelperStyles",
    value: function writeHelperStyles() {
      this.writeStyleSheet(["\n        *{\n            color:#333 !important;\n            font-family:\"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif !important;\n            background-image: none !important;\n            background-color:#eee !important;\n        }\n        ", "\n        a.btn,\n        a[href],\n        a[href]:hover,\n        a.button{\n            background-color: yellow !important;\n            color:black;\n        }\n        ", "\n        *:focus {\n            outline: 7px solid pink;\n        }\n        "]);
    }
  }, {
    key: "run",
    value: function run() {
      if (this.optionEnabled('hide-visual-elements')) {
        this.hideVisualElements();
      }

      if (this.optionEnabled('display-sr-only')) {
        this.showSrOnly();
      }

      if (this.optionEnabled('use-helper-styles')) {
        this.writeHelperStyles();
      }

      if (this.optionEnabled('highlight-aria-invisible')) {
        this.highlightAriaInvisible();
      } //run the feature

    }
  }]);

  return StyleHelper;
}(_BaseFeature2.default);

exports.default = StyleHelper;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DisplayAriaVisible = _interopRequireDefault(__webpack_require__(/*! ./features/DisplayAriaVisible */ "./src/features/DisplayAriaVisible.js"));

var _DisplayImageAltTags = _interopRequireDefault(__webpack_require__(/*! ./features/DisplayImageAltTags */ "./src/features/DisplayImageAltTags.js"));

var _StyleHelper = _interopRequireDefault(__webpack_require__(/*! ./features/StyleHelper */ "./src/features/StyleHelper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScreenReaderView =
/*#__PURE__*/
function () {
  function ScreenReaderView(config) {
    _classCallCheck(this, ScreenReaderView);

    this.config = Object.assign({
      "display-aria-visible": true,
      //done
      "highlight-aria-invisible": true,
      //todo
      "hide-visual-elements": true,
      //done
      "display-image-alts": true,
      //done
      "display-missing-image-alts": true,
      //done
      "display-sr-only": true,
      //done
      "use-helper-styles": true,
      //todo
      "enable-via-url": true,
      //done
      "url-parameter": "508",
      //done
      "body-class": "test-508" //done

    }, config);
  }

  _createClass(ScreenReaderView, [{
    key: "isEnabled",
    value: function isEnabled() {
      var url = new URL(window.location);
      var parameterValue = url.searchParams.get(this.config["url-parameter"]);

      if (this.config["enable-via-url"] !== true) {
        return true;
      }

      if (parameterValue) {
        return true;
      }

      return false;
    }
  }, {
    key: "addClass",
    value: function addClass() {
      var cssClass = this.config["body-class"];
      document.body.classList.add(cssClass);
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.isEnabled()) {
        return;
      }

      this.addClass(); //load all features

      var displayAriaVisible = new _DisplayAriaVisible.default(this.config);
      var displayImageAltTags = new _DisplayImageAltTags.default(this.config);
      var styleHelper = new _StyleHelper.default(this.config); //run all features

      displayAriaVisible.run();
      displayImageAltTags.run();
      styleHelper.run();
    }
  }]);

  return ScreenReaderView;
}();

exports.default = ScreenReaderView;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=508-view.js.map