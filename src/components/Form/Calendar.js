import React from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import styled from 'styled-components';

import 'react-day-picker/lib/style.css';

import { Box } from '../Box';
// import { DATEISO_FORMAT } from '../../tokens/constants';

/**
 * Calendar component. See documentation at
 * http://react-day-picker.js.org/examples/months-multiple
 *
 * This will take the following inputs:
 *  - Available days
 *  - Selected days
 *  - A function to handle the onClick.
 */

const Wrapper = styled(Box)`
  display: inline-block;
  width: auto;

  padding: ${({ theme }) => theme.space.xsmall};

  background: transparent;

  border: 1px solid ${({ theme }) => theme.colors.neutral.lighter};
  border-radius: ${({ theme }) => theme.radii.small};

  font-family: ${({ theme }) => theme.fonts.secondary};

  & .DayPicker-Day--available {
    color: ${({ theme }) => theme.colors.primary.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  &
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    color: ${({ theme }) => theme.colors.whiteout.lightest};
    background: ${({ theme }) => theme.colors.primary.dark};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  &
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    color: ${({ theme }) => theme.colors.whiteout.lightest};
    background: ${({ theme }) => theme.colors.primary.base};
  }
`;

const filterMarkers = (arrayOrFn, day) => {
  // run the function, if we get one passed as prop
  if (typeof arrayOrFn === 'function') {
    return arrayOrFn(day);
  }
  // otherwise it's an array of days, then run through the array
  const index = arrayOrFn.findIndex(currentDay =>
    DateUtils.isSameDay(currentDay, day)
  );
  return index !== -1;
};

const Calendar = ({
  initialMonth,
  availableDays,
  selectedDays,
  onDayClick,
  numberOfMonths,
}) => (
  <Wrapper>
    <DayPicker
      initialMonth={initialMonth ? initialMonth : new Date()}
      selectedDays={filterMarkers.bind(null, selectedDays)}
      onDayClick={onDayClick}
      modifiers={{ available: filterMarkers.bind(null, availableDays) }}
      disabledDays={[{ before: new Date() }]}
      numberOfMonths={numberOfMonths}
      todayButton="Go to Today"
    />
  </Wrapper>
);

Calendar.propTypes = {
  /** array of available days (or fn (day) => boolean (selected)) */
  availableDays: PropTypes.oneOfType([PropTypes.array, PropTypes.func])
    .isRequired,
  /** array of selected days (or fn (day) => boolean (selected)) */
  selectedDays: PropTypes.oneOfType([PropTypes.array, PropTypes.func])
    .isRequired,
  /** callback fn (day: date, modifiers: Object, e: SyntheticEvent) => void */
  onDayClick: PropTypes.func.isRequired,
  /** number of months to display next to each other */
  numberOfMonths: PropTypes.number.isRequired,
};

Calendar.defaultProps = {
  availableDays: [],
  selectedDays: [],
  numberOfMonths: 1,
};

export default Calendar;
