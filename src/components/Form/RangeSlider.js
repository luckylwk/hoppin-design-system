import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import styled from 'styled-components';

// ---------------------------

const StyledSlider = styled(Slider)`
  &.rangeslider {
    margin: ${({ theme }) => `${theme.space.large} 0 ${theme.space[6]}`};
    position: relative;
    background: ${({ theme }) => theme.colors.neutral.light};
    -ms-touch-action: none;
    touch-action: none;

    &,
    .rangeslider__fill {
      display: block;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
    }
    .rangeslider__handle {
      background: ${({ theme }) => theme.colors.whiteout.lightest};
      border: 1px solid ${({ theme }) => theme.colors.neutral.light};
      cursor: pointer;
      display: inline-block;
      position: absolute;
      outline: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);
      .rangeslider__active {
        opacity: 1;
      }
    }

    .rangeslider__handle-tooltip {
      width: 40px;
      height: 40px;
      text-align: center;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      font-weight: normal;
      font-size: 14px;
      transition: all 100ms ease-in;
      border-radius: 4px;
      display: inline-block;
      color: white;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      span {
        margin-top: 12px;
        display: inline-block;
        line-height: 100%;
      }
      &:after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
      }
    }
  }

  /**
  * Rangeslider - Horizontal slider
  */
  &.rangeslider-horizontal {
    height: 12px;
    border-radius: 10px;
    .rangeslider__fill {
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary.base};
      border-radius: 10px;
      top: 0;
    }
    .rangeslider__handle {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      &:after {
        content: ' ';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 6px;
        left: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.neutral.lighter};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset,
          0 -1px 3px rgba(0, 0, 0, 0.4) inset;
      }
    }
    .rangeslider__handle-tooltip {
      top: -55px;
      &:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid rgba(0, 0, 0, 0.8);
        left: 50%;
        bottom: -8px;
        transform: translate3d(-50%, 0, 0);
      }
    }
  }

  /**
  * Rangeslider - Vertical slider
  */
  &.rangeslider-vertical {
    margin: 20px auto;
    height: 150px;
    max-width: 10px;
    background-color: transparent;

    .rangeslider__fill,
    .rangeslider__handle {
      position: absolute;
    }

    .rangeslider__fill {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary.base};
      box-shadow: none;
      bottom: 0;
    }
    .rangeslider__handle {
      width: 30px;
      height: 10px;
      left: -10px;
      box-shadow: none;
    }
    .rangeslider__handle-tooltip {
      left: -100%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      &:after {
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid rgba(0, 0, 0, 0.8);
        left: 100%;
        top: 12px;
      }
    }
  }

  /**
* Rangeslider - Reverse
*/

  &.rangeslider-reverse {
    &.rangeslider-horizontal {
      .rangeslider__fill {
        right: 0;
      }
    }
    &.rangeslider-vertical {
      .rangeslider__fill {
        top: 0;
        bottom: inherit;
      }
    }
  }

  /**
* Rangeslider - Labels
*/
  & .rangeslider__labels {
    position: relative;
    .rangeslider-vertical & {
      position: relative;
      list-style-type: none;
      margin: 0 0 0 24px;
      padding: 0;
      text-align: left;
      width: 250px;
      height: 100%;
      left: 10px;

      .rangeslider__label-item {
        position: absolute;
        transform: translate3d(0, -50%, 0);

        &::before {
          content: '';
          width: 10px;
          height: 2px;
          background: black;
          position: absolute;
          left: -14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: -1;
        }
      }
    }

    .rangeslider__label-item {
      position: absolute;
      font-size: ${({ theme }) => theme.fontSizes.label};
      cursor: pointer;
      display: inline-block;
      top: 10px;
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

// ---------------------------

const RangeSlider = ({ name, value, onChange, ...rest }) => {
  const onChangeHandler = (newValue) => {
    onChange({ target: { type: 'slider', name, value: newValue } });
  };

  return (
    <StyledSlider
      name={name}
      value={value}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

RangeSlider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

RangeSlider.defaultProps = {
  value: 50,
  min: 0,
  max: 100,
};

RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
