import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

import Text from './Text';

const Emphasize = styled(Text)`
  display: ${({ display }) => display};

  border: 0px;
  border-bottom: 4px solid;
  border-bottom-color: ${({ theme }) =>
    Color(theme.colors.primary.base)
      .alpha('0.45')
      .rgb()
      .string()};
`;

Emphasize.propTypes = {
  display: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

Emphasize.defaultProps = {
  display: 'inline-block',
  fontWeight: 'medium',
  lineHeight: '0.75',
};

Emphasize.displayName = 'Emphasize';

export default Emphasize;
