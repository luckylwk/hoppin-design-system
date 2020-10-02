"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _propTypes2 = _interopRequireDefault(require("prop-types"));

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", "%;\n  ", ";\n\n  transition: all 400ms;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: ", ";\n  ", ";\n  top: 0;\n  left: 0;\n  right: 0;\n  height: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ProgressBarWrapper = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), function (_ref) {
  var alignTo = _ref.alignTo;
  return alignTo === 'page' ? 'fixed' : 'absolute';
}, function (_ref2) {
  var alignTo = _ref2.alignTo,
      theme = _ref2.theme;
  return alignTo === 'page' ? "z-index: " + theme.zIndices.overlay : null;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.xsmall;
});
var ProgressBarSlider = (0, _styledComponents["default"])(_Box.Box)(_templateObject2(), function (_ref4) {
  var percent = _ref4.percent;
  return percent;
}, _styledSystem.color);

var ProgressBar = function ProgressBar(_ref5) {
  var theme = _ref5.theme,
      bg = _ref5.bg,
      percent = _ref5.percent,
      rest = _objectWithoutPropertiesLoose(_ref5, ["theme", "bg", "percent"]);

  return /*#__PURE__*/_react["default"].createElement(ProgressBarWrapper, _extends({
    theme: theme
  }, rest), /*#__PURE__*/_react["default"].createElement(ProgressBarSlider, {
    theme: theme,
    bg: bg,
    percent: percent
  }));
};

ProgressBar.defaultProps = {
  bg: 'primary.base',
  alignTo: 'page',
  percent: 0
};
ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes["default"].color, {
  /**
  `page` (fixed to the top of the page) or
  `component` (aligned with the closest parent with a set position attribute).
  */
  alignTo: _propTypes2["default"].oneOf(['page', 'component']),

  /** 0-100 */
  percent: _propTypes2["default"].number
}) : {};
var _default = ProgressBar;
exports["default"] = _default;
module.exports = exports.default;