import PropTypes from 'prop-types';
import styled from 'styled-components';

// ---------------------------

export const RequiredText = styled.span`
  display: inline-block;

  margin-left: 8px;

  font-size: 13px;
  line-height: 11px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.form.required};
`;

RequiredText.propTypes = {};

RequiredText.defaultProps = {};

RequiredText.displayName = 'RequiredText';

// ---------------------------

export const RequiredCharacters = styled.p`
  margin: 0;
  padding: 4px 3px;

  font-family: ${({ theme }) => theme.fonts.secondary};

  font-size: 13px;
  line-height: 11px;
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
  padding: 7px 3px 4px 12px;

  font-family: ${({ theme }) => theme.fonts.secondary};

  font-size: 13px;
  line-height: 11px;
  color: ${({ theme }) => theme.colors.form.placeholder};
  font-weight: 300;

  text-align: left;
`;

FieldExplanation.propTypes = {
  marginTop: PropTypes.string,
};

FieldExplanation.defaultProps = {
  marginTop: '0px',
};

FieldExplanation.displayName = 'FieldExplanation';
