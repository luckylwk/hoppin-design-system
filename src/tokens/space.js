// based on 16px = 1em:

const space = [
  0,
  '.25rem', // 4px
  '.5rem', // 8px
  '1rem', // 16px
  '1.5rem', // 24px
  '3rem', // 32px
  '6rem', // 96px
  '10rem', // 160px
];

space.none = space[0];
space.xsmall = space[1];
space.small = space[2];
space.base = space[3];
space.medium = space[3];
space.large = space[4];
space.xlarge = space[5];
space.huge = space[6];

const containerWidths = {
  narrow: '50rem',
  base: '70rem',
  full: '100%',
};
containerWidths.normal = containerWidths.base;

const radii = [0, space.xsmall, space.small, space.base, space.large, '100%'];

radii.none = radii[0];
radii.xsmall = radii[1];
radii.small = radii[2];
radii.medium = radii[3];
radii.base = radii[3];
radii.large = radii[4];
radii.xlarge = radii[5];

const zIndices = [0, 15, 150, 1500, 15000, 50000];

zIndices.farBack = -zIndices[3];
zIndices.back = -zIndices[1];
zIndices.base = zIndices[0];
zIndices.front = zIndices[3];
zIndices.nav = zIndices[4];
zIndices.overlay = zIndices[5];

// breakpoints are mobile-first use no breakpoint to target phones and up
const breakpoints = ['40em', '52em', '64em'];
breakpoints.small = breakpoints[0]; // tablets
breakpoints.medium = breakpoints[1]; // large tablets, desktop
breakpoints.large = breakpoints[2]; // big screens

const mediaQueries = [
  `@media screen and (min-width: ${breakpoints[0]})`,
  `@media screen and (min-width: ${breakpoints[1]})`,
  `@media screen and (min-width: ${breakpoints[2]})`,
];

mediaQueries.small = mediaQueries[0]; // tablets
mediaQueries.medium = mediaQueries[1]; // large tablets, desktop
mediaQueries.large = mediaQueries[2]; // big screens

export { space, containerWidths, radii, zIndices, breakpoints, mediaQueries };
