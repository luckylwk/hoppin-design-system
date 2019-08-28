import React from 'react';
import { Lede } from '../Lede';
import styled from 'styled-components';

const ImageWrapper = styled.span`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.space.base} 0;
`;
const Image = styled.img`
  max-width: 100%;
`;

const MarkdownImage = ({ src, alt }) => {
  // only render caption if alt text is prefixed with a !
  const caption =
    typeof alt === 'string' && alt.indexOf('!') === 0
      ? alt.substr(1)
      : undefined;
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} />
      <br />
      {caption && (
        <Lede as="span" fontSize="label" color="neutral.light" marginY="xsmall">
          {caption}
        </Lede>
      )}
    </ImageWrapper>
  );
};

MarkdownImage.displayName = 'MarkdownImage';
export default MarkdownImage;
