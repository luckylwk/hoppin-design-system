import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from '.';
import { Box } from '../Box';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { default as ReactPhoneInput } from 'react-phone-input-2';
import PhoneInputBaseStyles from './PhoneInputBaseStyles';

const PhoneStyler = styled(Box)`
  &&& > div {
    .form-control {
      width: 100%;
      height: auto;
      appearance: none;
      outline: none;

      padding-top: 9px;
      padding-bottom: 9px;
      padding-right: ${({ theme }) => theme.space.base};
      padding-left: 68px;

      font-size: ${({ theme }) => theme.fontSizes.body};
      line-height: 1;
      font-weight: ${({ theme }) => theme.fontWeights.normal};

      font-family: ${({ theme }) => theme.fonts.secondary};
      color: ${({ theme }) => theme.colors.neutral.darker};

      background: ${({ value, theme }) =>
        value && value.length > 0
          ? theme.colors.form.focused.background
          : theme.colors.form.background};

      border-radius: ${({ theme }) => theme.radii.small};

      &:focus {
        background-color: ${({ theme }) =>
          theme.colors.form.focused.background};
        border-color: ${({ theme, overrideBg }) =>
          overrideBg || theme.colors.form.focused.border};
      }

      &:disabled {
        opacity: 0.25;
        cursor: not-allowed;
      }

      &::placeholder {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    }

    .flag-dropdown {
      padding-left: 8px;
      padding-right: 8px;

      background: ${({ theme }) => theme.colors.form.background};
      border-radius: ${({ theme }) => theme.radii.small} 0 0
        ${({ theme }) => theme.radii.small};

      &:hover {
        border-radius: ${({ theme }) => theme.radii.small} 0 0
          ${({ theme }) => theme.radii.small};
      }
    }

    .form-control,
    .flag-dropdown {
      border: ${({ theme }) => theme.borderWidths.base} solid
        ${({ theme }) => theme.colors.form.border};
      border-color: ${({ theme }) => theme.colors.form.border};
    }

    .form-control:focus + .flag-dropdown {
      background-color: ${({ theme }) => theme.colors.form.focused.background};
      border-color: ${({ theme, overrideBg }) =>
        overrideBg || theme.colors.form.focused.border};
    }
  }
`;

// --------------------------

const PhoneInput = ({ name, label, value, onChange, overrideBg }) => {
  const onChangePhone = (phoneNumber, _phone) => {
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
    const mockEvent = {
      target: {
        name,
        type: 'tel',
        value:
          parsedPhoneNumber && parsedPhoneNumber.number
            ? parsedPhoneNumber.number
            : phoneNumber,
        _phone: _phone || false,
      },
    };
    onChange(mockEvent);
  };

  return (
    <PhoneInputBaseStyles>
      {label && <Label htmlFor={name}>{label}</Label>}
      <PhoneStyler
        marginTop="small"
        marginBottom="base"
        overrideBg={overrideBg}
      >
        <ReactPhoneInput
          country="us"
          preferredCountries={['us', 'ca', 'gb']}
          value={value}
          onChange={onChangePhone}
        />
      </PhoneStyler>
    </PhoneInputBaseStyles>
  );
};

PhoneInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  overrideBg: PropTypes.string,
};

PhoneInput.defaultProps = {
  name: 'phone',
  label: null,
  overrideBg: null,
};

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
