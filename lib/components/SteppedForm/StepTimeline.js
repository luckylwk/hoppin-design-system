"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("../Box");

var _Container = require("../Container");

var _Timeline = require("../Timeline");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StepTimeline = function StepTimeline(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      steps = _ref.steps,
      options = _ref.options,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      displayMode = _ref.displayMode;
  var containerProps = displayMode === 'flex' ? {
    padding: 0
  } : {};
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, _extends({
    height: "100%",
    width: "narrow",
    overflow: "scroll"
  }, containerProps), /*#__PURE__*/_react["default"].createElement(_index.StepHeader, {
    title: title,
    lede: lede
  }), /*#__PURE__*/_react["default"].createElement(_Timeline.Timeline, _extends({
    steps: steps,
    flexGrow: 1
  }, options)), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    flexGrow: 2
  }), /*#__PURE__*/_react["default"].createElement(_index.ActionButtons, {
    actions: actions,
    onNavigate: onNavigate
  }));
};

StepTimeline.displayName = 'StepTimeline';
var _default = StepTimeline;
exports["default"] = _default;
module.exports = exports.default;