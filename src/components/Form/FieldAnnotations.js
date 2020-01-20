import PropTypes from 'prop-types';
import styled from 'styled-components';

// ---------------------------

export const RequiredText = styled.span`
  display: inline-block;

  margin-left: 6px;

  font-size: 12px;
  line-height: 10px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary.base};
`;

RequiredText.propTypes = {};

RequiredText.defaultProps = {};

RequiredText.displayName = 'RequiredText';

// ---------------------------

export const RequiredCharacters = styled.p`
  margin: 0;
  padding: 4px 3px;

  font-family: ${({ theme }) => theme.fonts.secondary};

  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.neutral.light};

  text-align: right;
`;

RequiredCharacters.propTypes = {};

RequiredCharacters.defaultProps = {};

RequiredCharacters.displayName = 'RequiredCharacters';

// ---------------------------

export const FieldExplanation = styled.p`
  margin: 0;
  margintop: ${({ marginTop }) => marginTop};
  padding: 4px 3px;

  font-family: ${({ theme }) => theme.fonts.secondary};

  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.neutral.base};

  text-align: left;
`;

FieldExplanation.propTypes = {
  marginTop: PropTypes.string,
};

FieldExplanation.defaultProps = {
  marginTop: '0px',
};

FieldExplanation.displayName = 'FieldExplanation';
