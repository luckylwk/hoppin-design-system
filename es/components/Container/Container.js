var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

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

Container.propTypes = _extends({}, Flex.propTypes);

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge']
};

Container.displayName = 'Container';

export default Container;