var _templateObject = _taggedTemplateLiteralLoose(['\n  border-top: none;\n'], ['\n  border-top: none;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';

import { Card } from 'components/Card';

var Swatch = styled(Card)(_templateObject);

export default (function (_ref) {
  var prefix = _ref.prefix,
      colors = _ref.colors;

  return Object.keys(colors).map(function (color) {
    return React.createElement(
      Swatch,
      { bg: colors[color], margin: 'xsmall', key: '' + prefix + color },
      prefix,
      color
    );
  });
});