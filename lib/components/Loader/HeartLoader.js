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
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  position: absolute;\n  \n  top: ", "px;\n  left: ", "px;\n\n  width: ", "px;\n  height: ", "px;\n  \n  background-color: ", ";\n  \n  animation: ", " 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n  animation-delay: ", ";\n\n  &:after,\n  &:before {\n    content: \" \";\n    position: absolute;\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n  }\n\n  &:before {\n    left: -", "px;\n    border-radius: 50% 0 0 50%;\n  }\n\n  &:after {\n    top: -", "px\n    border-radius: 50% 50% 0 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n\n  position: relative;\n\n  width: ", "px;\n  height: ", "px;\n\n  transform: rotate(45deg);\n  transform-origin: ", "px;\n  ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var HeartKeyFrames = (0, _styledComponents.keyframes)(_templateObject()); // ---------------------------

var Wrapper = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return Math.round(2 * size);
}, function (_ref2) {
  var size = _ref2.size;
  return Math.round(2 * size);
}, function (_ref3) {
  var size = _ref3.size;
  return Math.round(0.66 * size);
}, function (_ref4) {
  var size = _ref4.size;
  return Math.round(0.66 * size);
}); // ---------------------------


var Heart = _styledComponents["default"].div(_templateObject3(), function (_ref5) {
  var size = _ref5.size;
  return Math.round(0.66 * size);
}, function (_ref6) {
  var size = _ref6.size;
  return Math.round(0.66 * size);
}, function (_ref7) {
  var size = _ref7.size;
  return size;
}, function (_ref8) {
  var size = _ref8.size;
  return size;
}, function (_ref9) {
  var theme = _ref9.theme,
      context = _ref9.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, HeartKeyFrames, function (_ref10) {
  var delay = _ref10.delay;
  return delay;
}, function (_ref11) {
  var size = _ref11.size;
  return size;
}, function (_ref12) {
  var size = _ref12.size;
  return size;
}, function (_ref13) {
  var theme = _ref13.theme,
      context = _ref13.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, function (_ref14) {
  var size = _ref14.size;
  return Math.round(0.5 * size);
}, function (_ref15) {
  var size = _ref15.size;
  return Math.round(0.5 * size);
}); // ---------------------------


var HeartLoader = function HeartLoader(_ref16) {
  var size = _ref16.size,
      context = _ref16.context;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    size: size
  }, /*#__PURE__*/_react["default"].createElement(Heart, {
    delay: "0s",
    size: size,
    context: context
  }));
};

HeartLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes["default"].string,
  size: _propTypes["default"].number
} : {};
HeartLoader.defaultProps = {
  context: 'neutral',
  size: 32
};
HeartLoader.displayName = 'HeartLoader';
var _default = HeartLoader;
exports["default"] = _default;
module.exports = exports.default;