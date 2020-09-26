import PropTypes from 'prop-types';

import styled from 'styled-components';

const Textarea = styled.textarea`
  box-sizing: border-box;
  display: block;

  width: 100%;

  appearance: none;
  outline: none;

  padding: 12px 16px;

  background: ${({ theme }) => theme.colors.whiteout.light};

  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.neutral.darker};

  border: 2px solid transparent;
  border-color: ${({ theme, context }) => theme.colors.whiteout.darker};
  border-radius: ${({ theme }) => theme.radii.small};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme, context, overrideBg }) =>
      overrideBg ? overrideBg : theme.colors.secondary.lighter};
    background: ${({ theme, initialValue }) =>
      initialValue && initialValue.length > 0
        ? theme.colors.whiteout.base
        : theme.colors.whiteout.light};
  }

  &::placeholder {
    color: #a7a7a7;
  }
`;

Textarea.propTypes = {
  overrideBg: PropTypes.string,
};

Textarea.defaultProps = {
  overrideBg: null,
};

Textarea.displayName = 'Textarea';

export default Textarea;
