import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import PropTypes from 'prop-types';
import Checkbox from 'rc-checkbox';
import CheckboxLabel from './Label';

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
const HiddenCheckbox = styled(Checkbox)`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  vertical-align: text-top;

  width: 18px;
  height: 18px;
  ${CheckboxLabel} & {
    margin-right: ${({ theme }) => theme.space.small};
  }

  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary.base : theme.colors.primary.lighter};
  border: 1px solid ${({ theme }) => theme.colors.primary.base};

  border-radius: ${({ theme }) => theme.radii.xsmall};

  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => theme.shadows.xsmall};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

class CheckboxFancy extends Component {
  onClick = event => {
    event.preventDefault();
    const { checked, onChange } = this.props;
    onChange({ target: { checked: !checked } });
  };

  render() {
    const { name, checked, type, label } = this.props;

    const CheckBoxWrapper = label ? CheckboxLabel : CheckboxContainer;
    return (
      <CheckBoxWrapper onClick={this.onClick} htmlFor={name}>
        <HiddenCheckbox checked={checked} name={name} />
        <StyledCheckbox checked={checked} type={type}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        {label}
      </CheckBoxWrapper>
    );
  }
}

CheckboxFancy.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: PropTypes.string,
};

CheckboxFancy.displayName = 'CheckboxFancy';

export default CheckboxFancy;
