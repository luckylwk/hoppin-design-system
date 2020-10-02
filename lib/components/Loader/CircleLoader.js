"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: transparent !important;\n\n  width: ", "px;\n  height: ", "px;\n\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ", ";\n  border-bottom-color: transparent;\n\n  display: inline-block;\n  animation: ", " 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(1)}\n  100% {transform: rotate(360deg) scale(1)}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var CircleKeyFrames = (0, _styledComponents.keyframes)(_templateObject()); // ---------------------------

var Circle = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, CircleKeyFrames); // ---------------------------


var CircleLoader = function CircleLoader(_ref4) {
  var size = _ref4.size,
      context = _ref4.context;
  return /*#__PURE__*/_react["default"].createElement(Circle, {
    size: size,
    context: context
  });
};

CircleLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes["default"].string,
  size: _propTypes["default"].number
} : {};
CircleLoader.defaultProps = {
  context: 'neutral',
  size: 60
};
CircleLoader.displayName = 'CircleLoader';
var _default = CircleLoader;
exports["default"] = _default;
module.exports = exports.default;