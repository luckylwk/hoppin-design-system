import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled(Flex)`
  width: 100%;
  max-width: ${({ theme, width, maxWidth }) =>
    maxWidth ? maxWidth : theme.containerWidths[width]};
  margin-left: auto;
  margin-right: auto;
`;

Container.propTypes = {
  // ...Flex.propTypes,
  /** Set `width="narrow"` for to optimize body text width, set it to `base` for a wider layout, `full` to fill any available space. */
  width: PropTypes.oneOf(['narrow', 'base', 'full']),
  /** Only set `maxWidth` if absolutely necessary and you cant use narrow/base widths. */
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge'],
};

Container.displayName = 'Container';

export default Container;
