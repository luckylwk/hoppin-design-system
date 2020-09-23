"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = require("../Flex");

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Timeline(_ref) {
  var steps = _ref.steps,
      nextLabel = _ref.nextLabel,
      hideStepImageOnDesktop = _ref.hideStepImageOnDesktop,
      onStepChange = _ref.onStepChange,
      bulletSize = _ref.bulletSize,
      showTrack = _ref.showTrack,
      interactive = _ref.interactive,
      initAtStep = _ref.initAtStep,
      rest = _objectWithoutPropertiesLoose(_ref, ["steps", "nextLabel", "hideStepImageOnDesktop", "onStepChange", "bulletSize", "showTrack", "interactive", "initAtStep"]);

  var _useState = (0, _react.useState)(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var goToStep = function goToStep(index) {
    setActiveStep(index);
    onStepChange && onStepChange(steps[index]);
  };

  (0, _react.useEffect)(function () {
    if (initAtStep !== undefined && parseInt(initAtStep) !== 'NaN') {
      setActiveStep(parseInt(initAtStep));
    }
  }, [initAtStep]);
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, _extends({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "space-around",
    textAlign: "left"
  }, rest), steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement(_Step["default"], _extends({
      isActive: index === activeStep,
      key: index,
      index: index,
      isLast: index === steps.length - 1,
      goToStep: goToStep,
      nextLabel: nextLabel,
      hideStepImageOnDesktop: hideStepImageOnDesktop,
      bulletSize: bulletSize,
      showTrack: showTrack,
      interactive: interactive
    }, step));
  }));
}

Timeline.propTypes = process.env.NODE_ENV !== "production" ? {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    description: _propTypes["default"].string,
    image: _propTypes["default"].oneOfType([_propTypes["default"].shape({
      mobile: _propTypes["default"].string,
      desktop: _propTypes["default"].string
    }), _propTypes["default"].string])
  })),
  nextLabel: _propTypes["default"].string,
  showTrack: _propTypes["default"].bool,
  bulletSize: _propTypes["default"].string,
  interactive: _propTypes["default"].bool
} : {};
Timeline.defaultProps = {
  nextLabel: 'Next',
  showTrack: true,
  bulletSize: 'small',
  interactive: true,
  width: '1',
  flexGrow: 1
};
Timeline.displayName = 'Timeline';
var _default = Timeline;
exports["default"] = _default;
module.exports = exports.default;