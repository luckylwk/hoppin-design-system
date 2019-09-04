import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';

/**
 * https://medium.com/@ilonacodes/creating-floating-label-placeholder-for-input-with-react-b912233b7005
 *
 * Possible states:
 *  - 1. Empty input that is not focused
 *       Label is transparent (opacity: 0). Use the actual input placeholder.
 *       Label sits on on the input but when focused it will move (transform).
 *  - 2. Empty input that is focused - moves label to top
 *  - 3. Non-empty input - moves label to top
 *
 * To do:
 *  - [] Allow to be `disabled`
 *  - [] Allow to be in `error` state
 *  - [x] Label can be `disabled` to be set to `false` or `_`
 *  - [] Allow to show an `icon` (passed as a `child`). Uses a generic `renderIcon`
 */

const Field = styled(Box)`
  position: relative;
  box-sizing: border-box;

  width: ${props => {
    switch (props.renderWidth) {
      case 'third':
        return '30%';
      case 'full':
      default:
        return '100%';
    }
  }};

  margin: 0;

  background: transparent;

  @media (max-width: 831px) {
    height: 48px;
  }
  @media (min-width: 832px) {
    height: 56px;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;

  position: absolute;
  width: ${props => props.width || '100%'};
  left: 0;
  bottom: 0;

  padding: 10px 16px;
  padding-left: ${props => {
    switch (true) {
      case props.renderIcon:
        return '48px';
      default:
        return '10px';
    }
  }};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.defaults.fontWeight};
  color: ${({ theme }) => theme.colors.grey};

  background: ${({ theme, isEmpty, isFocused }) =>
    isFocused || !isEmpty ? 'white' : theme.backgrounds.inputs};

  border: 2px solid transparent;
  border-color: ${({ state, theme, renderType, isFocused }) => {
    switch (true) {
      case state === 'danger':
        return theme.colors.danger;
      case isFocused && renderType === 'host':
        return theme.colors.host_primary;
      case isFocused && renderType === 'primary':
        return typeof theme.colors.primary === 'object'
          ? theme.colors.shadower.base
          : theme.colors.primary;
      default:
        return theme.colors.grey_lighter;
    }
  }};
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  -webkit-animation: 1ms void-animation-out;

  &::placeholder {
    opacity: 1;
    color: ${({ isEmpty, isFocused }) =>
      isFocused || !isEmpty ? '#cfd7df' : 'transparent'};
    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @media (max-width: 831px) {
    font-size: ${({ theme }) => theme.defaults.fontSizeMobile};
    line-height: ${({ theme }) => theme.defaults.fontSizeMobile};
  }
  @media (min-width: 832px) {
    font-size: ${({ theme }) => theme.defaults.fontSize};
    line-height: ${({ theme }) => theme.defaults.fontSize};
  }
`;

const Label = styled.label`
  box-sizing: border-box;

  position: absolute;
  width: auto;
  left: ${({ renderIcon, isFocused, isEmpty }) => {
    switch (true) {
      case renderIcon && !(isFocused || !isEmpty):
        return '48px';
      default:
        return '8px';
    }
  }};
  bottom: 10px;

  padding: 4px 6px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.defaults.fontWeight};
  color: ${({ theme, isFocused, renderType }) => {
    switch (true) {
      case isFocused && renderType === 'host':
        return theme.colors.host_primary;
      case isFocused && renderType === 'primary':
        return typeof theme.colors.primary === 'object'
          ? theme.colors.shadower.base
          : theme.colors.primary;
      default:
        return theme.colors.grey_light;
    }
  }};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: ${({ isEmpty, isFocused }) =>
    isFocused || !isEmpty ? 'default' : 'text'};

  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 831px) {
    font-size: ${({ theme }) => theme.defaults.fontSizeMobile};
    line-height: ${({ theme }) => theme.defaults.fontSizeMobile};

    background: ${({ theme, isEmpty, isFocused }) =>
      isFocused || !isEmpty
        ? `linear-gradient(
           to top,
           ${theme.backgrounds.white} 0%,
           ${theme.backgrounds.white} 57%,
           transparent 58%,
           transparent 100%
        );`
        : 'transparent'};

    transform-origin: 0 50%;
    transform: ${({ isEmpty, isFocused }) =>
      isFocused || !isEmpty ? 'scale(0.70) translateY(-32px)' : 'none'};
  }

  @media (min-width: 832px) {
    font-size: ${({ theme }) => theme.defaults.fontSize};
    line-height: ${({ theme }) => theme.defaults.fontSize};

    background: ${({ theme, isEmpty, isFocused }) =>
      isFocused || !isEmpty
        ? `linear-gradient(
           to top,
           ${theme.backgrounds.white} 0%,
           ${theme.backgrounds.white} 53%,
           transparent 54%,
           transparent 100%
        );`
        : 'transparent'};

    transform-origin: 0 50%;
    transform: ${({ isEmpty, isFocused }) =>
      isFocused || !isEmpty ? 'scale(0.65) translateY(-38px)' : 'none'};
  }
`;

const IconSpan = styled.span`
  box-sizing: border-box;
  display: block;

  position: absolute;
  left: 0;
  bottom: 0;
  width: auto;

  margin: 0;

  font-size: 18px;
  line-height: 18px;

  color: #bbb;

  background: transparent;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  @media (max-width: 831px) {
    padding: 14px 15px 11px 15px;
  }
  @media (min-width: 832px) {
    padding: 15px 16px 14px 16px;
  }
`;

class InputFancy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      empty: props.value === '',
    };
  }

  onChange = event => {
    event.preventDefault();
    event.persist();
    this.props.handleOnChange(event);
    this.setState({
      empty: event.target.value === '',
    });
  };

  onFocus = _ => {
    this.setState({
      focused: !this.state.focused,
    });
  };

  onBlur = event => {
    this.setState({
      focused: false,
      empty: event.target.value === '',
    });
  };

  render() {
    const {
      type,
      name,
      label,
      value,
      renderWidth,
      renderType,
      renderIcon,
      children,
      inlineChildren,
    } = this.props;

    const { focused, empty } = this.state;

    return (
      <Fragment>
        <Field renderWidth={renderWidth}>
          <Input
            type={type}
            name={name}
            data-cy={`input-${name}`}
            placeholder=""
            onFocus={this.onFocus}
            isFocused={focused}
            onBlur={this.onBlur}
            onChange={this.onChange}
            value={value}
            isEmpty={empty}
            renderType={renderType}
            renderIcon={renderIcon}
          />
          {label && label !== '_' && (
            <Label
              htmlFor={name}
              isFocused={focused}
              isEmpty={empty}
              renderType={renderType}
              renderIcon={renderIcon}
              onClick={this.onFocus}
            >
              {label}
            </Label>
          )}
          {renderIcon && <IconSpan>{children}</IconSpan>}
        </Field>
        {inlineChildren}
      </Fragment>
    );
  }
}

InputFancy.propTypes = {
  // Input mechanics
  type: PropTypes.string,
  name: PropTypes.string.isRequired, // also used for id
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // State of field
  // state: PropTypes.string,
  // disabled: PropTypes.bool,
  // Handlers
  handleOnChange: PropTypes.func.isRequired,
  // Rendering
  renderWidth: PropTypes.string,
  renderType: PropTypes.string,
  renderIcon: PropTypes.bool,
  inlineChildren: PropTypes.node,
};

InputFancy.defaultProps = {
  // disabled: false,
  type: 'text',
  // state: 'normal',
  renderWidth: 'full',
  renderType: 'primary',
  renderIcon: false,
  inlineChildren: null,
};

InputFancy.displayName = 'InputFancy';

export default InputFancy;
