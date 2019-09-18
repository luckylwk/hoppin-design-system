var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  width: auto;\n\n  padding: ', ';\n\n  background: transparent;\n\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n\n  & .DayPicker-Day--available {\n    color: ', ';\n    font-weight: ', ';\n  }\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n  }\n\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n    color: ', ';\n    background: ', ';\n  }\n'], ['\n  display: inline-block;\n  width: auto;\n\n  padding: ', ';\n\n  background: transparent;\n\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n\n  & .DayPicker-Day--available {\n    color: ', ';\n    font-weight: ', ';\n  }\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n  }\n\n  &\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n    color: ', ';\n    background: ', ';\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import styled from 'styled-components';

import 'react-day-picker/lib/style.css';

import { Box } from '../Box';
import { DATEISO_FORMAT } from '../../tokens/constants';

/**
 * Calendar component. See documentation at
 * http://react-day-picker.js.org/examples/months-multiple
 *
 * This will take the following inputs:
 *  - Available days
 *  - Selected days
 *  - A function to handle the onClick.
 */

var Wrapper = styled(Box)(_templateObject, function (_ref) {
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

var filterMarkers = function filterMarkers(arrayOrFn, day) {
  // run the function, if we get one passed as prop
  if (typeof arrayOrFn === 'function') {
    return arrayOrFn(day);
  }
  // otherwise it's an array of days, then run through the array
  var index = arrayOrFn.findIndex(function (currentDay) {
    return DateUtils.isSameDay(currentDay, day);
  });
  return index !== -1;
};

var Calendar = function Calendar(_ref12) {
  var initialMonth = _ref12.initialMonth,
      availableDays = _ref12.availableDays,
      selectedDays = _ref12.selectedDays,
      onDayClick = _ref12.onDayClick,
      numberOfMonths = _ref12.numberOfMonths;
  return React.createElement(
    Wrapper,
    null,
    React.createElement(DayPicker, {
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
  availableDays: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  /** array of selected days (or fn (day) => boolean (selected)) */
  selectedDays: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  /** callback fn (day: date, modifiers: Object, e: SyntheticEvent) => void */
  onDayClick: PropTypes.func.isRequired,
  /** number of months to display next to each other */
  numberOfMonths: PropTypes.number.isRequired
} : {};

Calendar.defaultProps = {
  availableDays: [],
  selectedDays: [],
  numberOfMonths: 1
};

export default Calendar;