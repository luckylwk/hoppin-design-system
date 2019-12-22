'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  width: auto;\n\n  padding: ', ';\n\n  background: transparent;\n\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n\n  & .DayPicker-Day--available {\n    color: ', ';\n    font-weight: ', ';\n  }\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n  }\n\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n    color: ', ';\n    background: ', ';\n  }\n'], ['\n  display: inline-block;\n  width: auto;\n\n  padding: ', ';\n\n  background: transparent;\n\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n\n  & .DayPicker-Day--available {\n    color: ', ';\n    font-weight: ', ';\n  }\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n  }\n\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n    color: ', ';\n    background: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('react-day-picker/lib/style.css');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Calendar component. See documentation at
 * http://react-day-picker.js.org/examples/months-multiple
 *
 * This will take the following inputs:
 *  - Available days
 *  - Selected days
 *  - A function to handle the onClick.
 */

// ---------------------------

var Wrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.space.xsmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral.lighter;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fonts.secondary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontWeights.bold;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary.dark;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontWeights.bold;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.primary.base;
});

// ---------------------------

var filterMarkers = function filterMarkers(arrayOrFn, day) {
  // run the function, if we get one passed as prop
  if (typeof arrayOrFn === 'function') {
    return arrayOrFn(day);
  }
  // otherwise it's an array of days, then run through the array
  var index = arrayOrFn.findIndex(function (currentDay) {
    return _reactDayPicker.DateUtils.isSameDay(currentDay, day);
  });
  return index !== -1;
};

// ---------------------------

var Calendar = function Calendar(_ref12) {
  var initialMonth = _ref12.initialMonth,
      availableDays = _ref12.availableDays,
      selectedDays = _ref12.selectedDays,
      onDayClick = _ref12.onDayClick,
      numberOfMonths = _ref12.numberOfMonths;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(_reactDayPicker2.default, {
      initialMonth: initialMonth ? initialMonth : new Date(),
      selectedDays: filterMarkers.bind(null, selectedDays),
      onDayClick: onDayClick,
      modifiers: { available: filterMarkers.bind(null, availableDays) },
      disabledDays: [{ before: new Date() }],
      numberOfMonths: numberOfMonths,
      todayButton: 'Go to Today'
    })
  );
};

Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** array of available days (or fn (day) => boolean (selected)) */
  availableDays: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]).isRequired,
  /** array of selected days (or fn (day) => boolean (selected)) */
  selectedDays: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]).isRequired,
  /** callback fn (day: date, modifiers: Object, e: SyntheticEvent) => void */
  onDayClick: _propTypes2.default.func.isRequired,
  /** number of months to display next to each other */
  numberOfMonths: _propTypes2.default.number.isRequired
} : {};

Calendar.defaultProps = {
  availableDays: [],
  selectedDays: [],
  numberOfMonths: 1
};

exports.default = Calendar;
module.exports = exports['default'];