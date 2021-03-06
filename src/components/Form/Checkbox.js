import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import CheckboxLabel from './Label';

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
  stroke: ${({ theme }) => theme.colors.primary.dark};
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

  ${CheckboxLabel} & {
    margin-right: ${({ theme }) => theme.space.small};
  }

  background: ${({ checked, theme }) =>
    !checked ? theme.colors.neutral.lightest : theme.colors.primary.lightest};
  border: 2px solid
    ${({ checked, theme }) =>
      !checked ? theme.colors.neutral.lighter : theme.colors.primary.base};

  border-radius: ${({ theme }) => theme.radii.xsmall};

  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => theme.shadows.xsmall};
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

StyledCheckbox.displayName = 'StyledCheckbox';

// ---------------------------

const Checkbox = ({ name, checked, label, onChange }) => {
  const onClick = e => {
    e.preventDefault();
    onChange({
      target: {
        type: 'checkbox',
        name,
        value: !checked ? 'on' : null,
        checked: !checked,
      },
    });
  };
  const CheckBoxWrapper = label ? CheckboxLabel : CheckboxContainer;

  return (
    <CheckBoxWrapper onClick={onClick} htmlFor={name}>
      <HiddenCheckbox checked={checked} name={name} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {label}
    </CheckBoxWrapper>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
