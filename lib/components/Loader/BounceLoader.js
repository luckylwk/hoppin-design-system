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
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: absolute;\n\n  height: ", "px;\n  width: ", "px;\n  top: 0;\n  left: -", "px;\n\n  background-color: ", ";\n  opacity: 0.6;\n\n  border-radius: 100%;\n\n  animation-fill-mode: both;\n  -webkit-animation: ", " 2.1s infinite ease-in-out;\n  -moz-animation: ", " 2.1s infinite ease-in-out;\n  animation: ", " 2.1s infinite ease-in-out;\n  animation-delay: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n\n  display: inline-block;\n  position: relative;\n\n  width: auto;\n  min-height: ", "px;\n\n  margin: 0 auto;\n\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 100% {\n    transform: scale(0)\n  } 50% {\n    transform: scale(1.0)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var BounceKeyFrame = (0, _styledComponents.keyframes)(_templateObject()); // ---------------------------

var BounceWrapper = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return size;
}); // ---------------------------


var Bounce = _styledComponents["default"].div(_templateObject3(), function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var size = _ref4.size;
  return parseInt(0.5 * size);
}, function (_ref5) {
  var theme = _ref5.theme,
      context = _ref5.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, BounceKeyFrame, BounceKeyFrame, BounceKeyFrame, function (_ref6) {
  var delay = _ref6.delay;
  return delay;
}); // ---------------------------


var BounceLoader = function BounceLoader(_ref7) {
  var size = _ref7.size,
      context = _ref7.context;
  return /*#__PURE__*/_react["default"].createElement(BounceWrapper, {
    size: size
  }, /*#__PURE__*/_react["default"].createElement(Bounce, {
    delay: "0s",
    size: size,
    context: context
  }), /*#__PURE__*/_react["default"].createElement(Bounce, {
    delay: "-1s",
    size: size,
    context: context
  }));
};

BounceLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes["default"].string,
  size: _propTypes["default"].number
} : {};
BounceLoader.defaultProps = {
  context: 'neutral',
  size: 60
};
BounceLoader.displayName = 'BounceLoader';
var _default = BounceLoader;
exports["default"] = _default;
module.exports = exports.default;