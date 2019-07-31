import React from 'react';
import { Lede } from '../Lede';
import { Box } from '../Box';

const MarkdownImage = ({ src, alt }) => {
  // only render caption if alt text is prefixed with a !
  const caption =
    typeof alt === 'string' && alt.indexOf('!') === 0
      ? alt.substr(1)
      : undefined;
  return (
    <Box position="relative">
      <img src={src} alt={alt} />
      {caption && (
        <Lede fontSize="label" color="neutral.light" marginY="xsmall">
          {caption}
        </Lede>
      )}
    </Box>
  );
};

MarkdownImage.displayName = 'MarkdownImage';
export default MarkdownImage;
