var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  width: 100%;\n  padding: ', ' 0;\n'], ['\n  display: inline-block;\n  width: 100%;\n  padding: ', ' 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  max-width: 100%;\n'], ['\n  max-width: 100%;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Lede } from '../Lede';
import styled from 'styled-components';

var ImageWrapper = styled.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.space.base;
});
var Image = styled.img(_templateObject2);

var MarkdownImage = function MarkdownImage(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt;

  // only render caption if alt text is prefixed with a !
  var caption = typeof alt === 'string' && alt.indexOf('!') === 0 ? alt.substr(1) : undefined;
  return React.createElement(
    ImageWrapper,
    null,
    React.createElement(Image, { src: src, alt: alt }),
    caption && React.createElement(
      Lede,
      { as: 'span', fontSize: 'label', color: 'neutral.light', marginY: 'xsmall' },
      caption
    )
  );
};

MarkdownImage.displayName = 'MarkdownImage';
export default MarkdownImage;