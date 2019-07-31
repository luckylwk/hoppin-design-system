import React from 'react';
import { Lede } from '../Lede';
import { Box } from '../Box';

var MarkdownImage = function MarkdownImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  // only render caption if alt text is prefixed with a !
  var caption = typeof alt === 'string' && alt.indexOf('!') === 0 ? alt.substr(1) : undefined;
  return React.createElement(
    Box,
    { position: 'relative' },
    React.createElement('img', { src: src, alt: alt }),
    caption && React.createElement(
      Lede,
      { fontSize: 'label', color: 'neutral.light', marginY: 'xsmall' },
      caption
    )
  );
};

MarkdownImage.displayName = 'MarkdownImage';
export default MarkdownImage;