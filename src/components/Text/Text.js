import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Text = styled('span')(
  typography,
  space,
  color
  /*
    do we need layout and background props, too?
    or keep the component simple and looking after text only?
  */
);

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};

Text.defaultProps = {
  fontFamily: 'secondary',
  fontSize: 'inherit',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
};

Text.displayName = 'Text';

export default Text;
