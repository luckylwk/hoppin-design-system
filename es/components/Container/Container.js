var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var Container = styled(Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidths[width];
});

Container.propTypes = {
  // ...Flex.propTypes,
  /** Set `width="narrow"` for to optimize body text width, set it to `base` for a wider layout, `full` to fill any available space. */
  width: PropTypes.oneOf(['narrow', 'base', 'full']),
  /** Only set `maxWidth` if absolutely necessary and you cant use narrow/base widths. */
  maxWidth: PropTypes.string
};

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge']
};

Container.displayName = 'Container';

export default Container;