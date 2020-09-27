import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { Card } from '../components/Card';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';

const spaceScale = ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'];

const Swatch = styled(Card)`
  border-top: none;
  overflow: hidden;
  ${({ theme, borderRadius }) =>
    borderRadius ? `border-radius: ${theme.radii[borderRadius]};` : null}
  ${({ theme, boxShadow }) =>
    boxShadow ? `box-shadow: ${theme.shadows[boxShadow]};` : null}
`;
Swatch.defaultProps = { marginY: 'small' };
Swatch.displayName = 'Swatch';

const getContrastColor = (bg, colors) => {
  const bgColor = Color(bg);
  const light = Color(colors.neutral.lightest);
  const dark = Color(colors.neutral.darkest);

  return bgColor.contrast(light) > bgColor.contrast(dark)
    ? colors.neutral.lightest
    : colors.neutral.darkest;
};

const ColorSwatches = ({ context, colors }) => {
  return Object.keys(colors[context]).map((color) => {
    return (
      <Swatch
        bg={colors[context][color]}
        color={getContrastColor(colors[context][color], colors)}
        key={`${context}${color}`}
        flexDirection="row"
        justifyItems="space-between"
      >
        <Box>
          {context}.{color}
        </Box>
        <Box flexGrow={0} opacity={0.3}>
          {colors[context][color]}
        </Box>
      </Swatch>
    );
  });
};

const SpaceSwatches = ({ space }) => {
  return spaceScale.map((key) => (
    <Swatch bg="neutral.base" padding={key} key={key}>
      <Flex bg="neutral.lightest" padding="base">
        <Box>{key === 'medium' ? "medium (or 'base')" : key}</Box>
        <Box flexGrow={0} opacity={0.3}>
          {space[key]}
        </Box>
      </Flex>
    </Swatch>
  ));
};

const RadiusSwatches = ({ radii }) => {
  return spaceScale.map((key) => (
    <Swatch
      bg="neutral.base"
      padding="large"
      key={key}
      flexDirection="row"
      justifyItems="space-between"
      borderRadius={key}
      color="whiteout.lightest"
    >
      <Box>{key === 'medium' ? "medium (or 'base')" : key}</Box>
      <Box flexGrow={0} opacity={0.3}>
        {radii[key]}
      </Box>
    </Swatch>
  ));
};

const ShadowSwatches = ({ shadows }) => {
  return spaceScale.map((key) => (
    <Swatch
      padding="large"
      marginY="xlarge"
      key={key}
      flexDirection="row"
      justifyItems="space-between"
      boxShadow={key}
      bg="whiteout.base"
    >
      <Box>{key === 'medium' ? "medium (or 'base')" : key}</Box>
      <Box flexGrow={0} opacity={0.3}>
        {shadows[key]}
      </Box>
    </Swatch>
  ));
};

export { ColorSwatches, SpaceSwatches, RadiusSwatches, ShadowSwatches, Swatch };
