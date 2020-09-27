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

      padding-top: ${({ theme }) => theme.space.small};
      padding-bottom: ${({ theme }) => theme.space.small};
      padding-right: ${({ theme }) => theme.space.base};

      font-size: ${({ theme }) => theme.fontSizes.body};
      line-height: 1;
      font-weight: ${({ theme }) => theme.fontWeights.normal};

      font-family: ${({ theme }) => theme.fonts.secondary};
      color: ${({ theme }) => theme.colors.neutral.darker};

      background: ${({ value, theme }) =>
        value && value.length > 0
          ? theme.colors.whiteout.light
          : theme.colors.whiteout.lighter};

      border-radius: ${({ theme }) => theme.radii.small};

      &:focus {
        background-color: ${({ theme }) => theme.colors.whiteout.lighter};
        border-color: ${({ theme, overrideBg }) =>
          overrideBg ? overrideBg : theme.colors.secondary.lighter};
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
      background: ${({ theme }) => theme.colors.whiteout.light};
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
        ${({ theme }) => theme.colors.whiteout.darker};
      border-color: ${({ theme }) => theme.colors.whiteout.darker};
    }

    .form-control:focus + .flag-dropdown {
      background-color: ${({ theme }) => theme.colors.whiteout.lighter};
      border-color: ${({ theme, overrideBg }) =>
        overrideBg ? overrideBg : theme.colors.secondary.lighter};
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
