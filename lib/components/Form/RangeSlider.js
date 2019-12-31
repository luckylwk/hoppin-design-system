'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  &.rangeslider {\n    margin: ', ';\n    position: relative;\n    background: ', ';\n    -ms-touch-action: none;\n    touch-action: none;\n\n    &,\n    .rangeslider__fill {\n      display: block;\n      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    .rangeslider__handle {\n      background: ', ';\n      border: 1px solid ', ';\n      cursor: pointer;\n      display: inline-block;\n      position: absolute;\n      outline: none;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n      .rangeslider__active {\n        opacity: 1;\n      }\n    }\n\n    .rangeslider__handle-tooltip {\n      width: 40px;\n      height: 40px;\n      text-align: center;\n      position: absolute;\n      background-color: rgba(0, 0, 0, 0.8);\n      font-weight: normal;\n      font-size: 14px;\n      transition: all 100ms ease-in;\n      border-radius: 4px;\n      display: inline-block;\n      color: white;\n      left: 50%;\n      transform: translate3d(-50%, 0, 0);\n      span {\n        margin-top: 12px;\n        display: inline-block;\n        line-height: 100%;\n      }\n      &:after {\n        content: \' \';\n        position: absolute;\n        width: 0;\n        height: 0;\n      }\n    }\n  }\n\n  /**\n  * Rangeslider - Horizontal slider\n  */\n  &.rangeslider-horizontal {\n    height: 12px;\n    border-radius: 10px;\n    .rangeslider__fill {\n      height: 100%;\n      background-color: ', ';\n      border-radius: 10px;\n      top: 0;\n    }\n    .rangeslider__handle {\n      width: 30px;\n      height: 30px;\n      border-radius: 30px;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      &:after {\n        content: \' \';\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        top: 6px;\n        left: 6px;\n        border-radius: 50%;\n        background-color: ', ';\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset,\n          0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n      }\n    }\n    .rangeslider__handle-tooltip {\n      top: -55px;\n      &:after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid rgba(0, 0, 0, 0.8);\n        left: 50%;\n        bottom: -8px;\n        transform: translate3d(-50%, 0, 0);\n      }\n    }\n  }\n\n  /**\n  * Rangeslider - Vertical slider\n  */\n  &.rangeslider-vertical {\n    margin: 20px auto;\n    height: 150px;\n    max-width: 10px;\n    background-color: transparent;\n\n    .rangeslider__fill,\n    .rangeslider__handle {\n      position: absolute;\n    }\n\n    .rangeslider__fill {\n      width: 100%;\n      background-color: ', ';\n      box-shadow: none;\n      bottom: 0;\n    }\n    .rangeslider__handle {\n      width: 30px;\n      height: 10px;\n      left: -10px;\n      box-shadow: none;\n    }\n    .rangeslider__handle-tooltip {\n      left: -100%;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      &:after {\n        border-top: 8px solid transparent;\n        border-bottom: 8px solid transparent;\n        border-left: 8px solid rgba(0, 0, 0, 0.8);\n        left: 100%;\n        top: 12px;\n      }\n    }\n  }\n\n  /**\n* Rangeslider - Reverse\n*/\n\n  &.rangeslider-reverse {\n    &.rangeslider-horizontal {\n      .rangeslider__fill {\n        right: 0;\n      }\n    }\n    &.rangeslider-vertical {\n      .rangeslider__fill {\n        top: 0;\n        bottom: inherit;\n      }\n    }\n  }\n\n  /**\n* Rangeslider - Labels\n*/\n  & .rangeslider__labels {\n    position: relative;\n    .rangeslider-vertical & {\n      position: relative;\n      list-style-type: none;\n      margin: 0 0 0 24px;\n      padding: 0;\n      text-align: left;\n      width: 250px;\n      height: 100%;\n      left: 10px;\n\n      .rangeslider__label-item {\n        position: absolute;\n        transform: translate3d(0, -50%, 0);\n\n        &::before {\n          content: \'\';\n          width: 10px;\n          height: 2px;\n          background: black;\n          position: absolute;\n          left: -14px;\n          top: 50%;\n          transform: translateY(-50%);\n          z-index: -1;\n        }\n      }\n    }\n\n    .rangeslider__label-item {\n      position: absolute;\n      font-size: ', ';\n      cursor: pointer;\n      display: inline-block;\n      top: 10px;\n      transform: translate3d(-50%, 0, 0);\n    }\n  }\n'], ['\n  &.rangeslider {\n    margin: ', ';\n    position: relative;\n    background: ', ';\n    -ms-touch-action: none;\n    touch-action: none;\n\n    &,\n    .rangeslider__fill {\n      display: block;\n      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    .rangeslider__handle {\n      background: ', ';\n      border: 1px solid ', ';\n      cursor: pointer;\n      display: inline-block;\n      position: absolute;\n      outline: none;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n      .rangeslider__active {\n        opacity: 1;\n      }\n    }\n\n    .rangeslider__handle-tooltip {\n      width: 40px;\n      height: 40px;\n      text-align: center;\n      position: absolute;\n      background-color: rgba(0, 0, 0, 0.8);\n      font-weight: normal;\n      font-size: 14px;\n      transition: all 100ms ease-in;\n      border-radius: 4px;\n      display: inline-block;\n      color: white;\n      left: 50%;\n      transform: translate3d(-50%, 0, 0);\n      span {\n        margin-top: 12px;\n        display: inline-block;\n        line-height: 100%;\n      }\n      &:after {\n        content: \' \';\n        position: absolute;\n        width: 0;\n        height: 0;\n      }\n    }\n  }\n\n  /**\n  * Rangeslider - Horizontal slider\n  */\n  &.rangeslider-horizontal {\n    height: 12px;\n    border-radius: 10px;\n    .rangeslider__fill {\n      height: 100%;\n      background-color: ', ';\n      border-radius: 10px;\n      top: 0;\n    }\n    .rangeslider__handle {\n      width: 30px;\n      height: 30px;\n      border-radius: 30px;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      &:after {\n        content: \' \';\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        top: 6px;\n        left: 6px;\n        border-radius: 50%;\n        background-color: ', ';\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset,\n          0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n      }\n    }\n    .rangeslider__handle-tooltip {\n      top: -55px;\n      &:after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid rgba(0, 0, 0, 0.8);\n        left: 50%;\n        bottom: -8px;\n        transform: translate3d(-50%, 0, 0);\n      }\n    }\n  }\n\n  /**\n  * Rangeslider - Vertical slider\n  */\n  &.rangeslider-vertical {\n    margin: 20px auto;\n    height: 150px;\n    max-width: 10px;\n    background-color: transparent;\n\n    .rangeslider__fill,\n    .rangeslider__handle {\n      position: absolute;\n    }\n\n    .rangeslider__fill {\n      width: 100%;\n      background-color: ', ';\n      box-shadow: none;\n      bottom: 0;\n    }\n    .rangeslider__handle {\n      width: 30px;\n      height: 10px;\n      left: -10px;\n      box-shadow: none;\n    }\n    .rangeslider__handle-tooltip {\n      left: -100%;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      &:after {\n        border-top: 8px solid transparent;\n        border-bottom: 8px solid transparent;\n        border-left: 8px solid rgba(0, 0, 0, 0.8);\n        left: 100%;\n        top: 12px;\n      }\n    }\n  }\n\n  /**\n* Rangeslider - Reverse\n*/\n\n  &.rangeslider-reverse {\n    &.rangeslider-horizontal {\n      .rangeslider__fill {\n        right: 0;\n      }\n    }\n    &.rangeslider-vertical {\n      .rangeslider__fill {\n        top: 0;\n        bottom: inherit;\n      }\n    }\n  }\n\n  /**\n* Rangeslider - Labels\n*/\n  & .rangeslider__labels {\n    position: relative;\n    .rangeslider-vertical & {\n      position: relative;\n      list-style-type: none;\n      margin: 0 0 0 24px;\n      padding: 0;\n      text-align: left;\n      width: 250px;\n      height: 100%;\n      left: 10px;\n\n      .rangeslider__label-item {\n        position: absolute;\n        transform: translate3d(0, -50%, 0);\n\n        &::before {\n          content: \'\';\n          width: 10px;\n          height: 2px;\n          background: black;\n          position: absolute;\n          left: -14px;\n          top: 50%;\n          transform: translateY(-50%);\n          z-index: -1;\n        }\n      }\n    }\n\n    .rangeslider__label-item {\n      position: absolute;\n      font-size: ', ';\n      cursor: pointer;\n      display: inline-block;\n      top: 10px;\n      transform: translate3d(-50%, 0, 0);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRangeslider = require('react-rangeslider');

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var StyledSlider = (0, _styledComponents2.default)(_reactRangeslider2.default)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.space.large + ' 0 ' + theme.space[6];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.neutral.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.neutral.lighter;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSizes.label;
});

// ---------------------------

var RangeSlider = function RangeSlider(_ref9) {
  var name = _ref9.name,
      value = _ref9.value,
      onChange = _ref9.onChange,
      rest = _objectWithoutProperties(_ref9, ['name', 'value', 'onChange']);

  var onChangeHandler = function onChangeHandler(newValue) {
    onChange({ target: { type: 'slider', name: name, value: newValue } });
  };

  return _react2.default.createElement(StyledSlider, _extends({
    name: name,
    value: value,
    onChange: onChangeHandler
  }, rest));
};

RangeSlider.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.number,
  onChange: _propTypes2.default.func.isRequired,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number
} : {};

RangeSlider.defaultProps = {
  value: 50,
  min: 0,
  max: 100
};

RangeSlider.displayName = 'RangeSlider';

exports.default = RangeSlider;
module.exports = exports['default'];