import styled from 'styled-components';
import { space, color, typography, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Label = styled('label')`
  display: inline-block;
  vertical-align: middle;

  ${typography}
  ${space}
  ${color}
  ${position}
  width: 100%;
  flex: 1 1 100%;
`;

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};
Label.defaultProps = {
  lineHeight: 0,
  fontFamily: 'secondary',
  fontSize: 'label',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginRight: 'large',
  position: 'relative',
};

Label.displayName = 'Label';
export default Label;
