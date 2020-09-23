"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n\n  width: ", "px;\n  height: ", "px;\n  margin-top: -0.2rem;\n  margin-right: 0.1rem;\n  margin-bottom: 0.1rem;\n  margin-left: 0.1rem;\n\n  background-color: ", ";\n\n  border-radius: 100%;\n\n  -webkit-animation: ", " 1.4s infinite ease-in-out both;\n  -moz-animation: ", " 1.4s infinite ease-in-out both;\n  animation: ", " 1.4s infinite ease-in-out both;\n  animation-delay: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  margin: 0 auto;\n  width: auto;\n\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } \n  40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var DotKeyframes = (0, _styledComponents.keyframes)(_templateObject()); // ---------------------------

var Wrapper = _styledComponents["default"].div(_templateObject2()); // ---------------------------


var Dot = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, DotKeyframes, DotKeyframes, DotKeyframes, function (_ref4) {
  var delay = _ref4.delay;
  return delay;
}); // ---------------------------


var Loader = function Loader(_ref5) {
  var size = _ref5.size,
      context = _ref5.context;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(Dot, {
    delay: "-0.32s",
    size: size,
    context: context
  }), /*#__PURE__*/_react["default"].createElement(Dot, {
    delay: "-0.16s",
    size: size,
    context: context
  }), /*#__PURE__*/_react["default"].createElement(Dot, {
    delay: "0.0s",
    size: size,
    context: context
  }));
};

Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes["default"].string,
  size: _propTypes["default"].number
} : {};
Loader.defaultProps = {
  context: 'neutral',
  size: 16
};
Loader.displayName = 'DotLoader';
var _default = Loader;
exports["default"] = _default;
module.exports = exports.default;