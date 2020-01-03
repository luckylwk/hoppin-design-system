// import PropTypes from 'prop-types';
import styled from 'styled-components';

export const RequiredText = styled.span`
  display: inline-block;

  margin-left: 6px;

  font-size: 12px;
  line-height: 10px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary.base};
`;

RequiredText.propTypes = {
  // color: PropTypes.string,
};

RequiredText.defaultProps = {
  // color: 'primary.base',
};

RequiredText.displayName = 'RequiredText';

export default RequiredText;
