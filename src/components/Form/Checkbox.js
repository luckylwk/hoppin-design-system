import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';

import { Label, RequiredText } from '.';

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

// ---------------------------

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

// ---------------------------

const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary.lightest};
  stroke-width: 4px;
`;

// ---------------------------

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
RcCheckbox.displayName = 'RcCheckbox';

// ---------------------------

const HiddenCheckbox = styled(RcCheckbox)`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 2px;
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

// ---------------------------

const StyledCheckbox = styled.div`
  display: inline-block;
  vertical-align: text-top;

  width: 18px;
  height: 18px;

  ${Label} & {
    margin-right: ${({ theme }) => theme.space.small};
  }

  background: ${({ checked, theme }) =>
    !checked ? theme.colors.form.background : theme.colors.primary.darkest};
  border: 2px solid
    ${({ checked, theme }) =>
      !checked ? theme.colors.form.border : theme.colors.primary.darkest};

  border-radius: ${({ theme }) => theme.radii.xsmall};

  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => theme.shadows.xsmall};
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }

  cursor: pointer;
`;

StyledCheckbox.displayName = 'StyledCheckbox';

// ---------------------------

const Checkbox = ({ name, checked, label, required, onChange }) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      onChange({
        target: {
          type: 'checkbox',
          name,
          value: !checked ? 'on' : null,
          checked: !checked,
        },
      });
    },
    [onChange, checked, name]
  );

  const LabelOrCheckboxContainer = !!label ? Label : CheckboxContainer;

  return (
    <LabelOrCheckboxContainer onClick={onClick} htmlFor={name}>
      <HiddenCheckbox checked={checked} name={name} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {label}
      {label && required && <RequiredText>*required</RequiredText>}
    </LabelOrCheckboxContainer>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: PropTypes.string,
  required: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
  required: false,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
