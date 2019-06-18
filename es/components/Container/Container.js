var _templateObject = _taggedTemplateLiteralLoose(['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';

var Container = styled(Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidth;
});

Container.defaultProps = {
  display: 'flex'
};

export default Container;