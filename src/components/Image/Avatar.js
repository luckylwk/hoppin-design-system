import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

import { Box } from '../Box';

const determineSize = ({ size }) => {
  switch (size) {
    case 'small':
      return '24px';
    case 'icon':
      return '32px';
    case 'base':
    default:
      return '96px';
  }
}

const Avatar = styled(Box)`
  ${layout}

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  border-radius: ${({ squared }) => {
    switch (squared) {
      case true:
        return '12px';
      case false:
      default:
        return '50%';
    }
  }};

  width: ${determineSize};
  height: ${determineSize};
`;

Avatar.propTypes = {
  ...systemPropTypes.layout,
  size: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  display: 'inline-block',
  size: 'default',
  squared: false,
};

Avatar.displayName = 'Avatar';

export default Avatar;
