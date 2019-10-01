// based on 16px = 1em:

const space = [
  0,
  '.25rem', // 4px
  '.5rem', // 8px
  '1rem', // 16px
  '1.5rem', // 24px
  '2rem', // 32px
  '4rem', // 64px
  '6rem', // 96px
];

space.none = space[0];
space.xsmall = space[1];
space.small = space[2];
space.base = space[3];
space.medium = space[3];
space.large = space[4];
space.xlarge = space[5];

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

const zIndexes = [0, 3, 5, 8, 13, 21];

zIndexes.farBack = -zIndexes[3];
zIndexes.back = -zIndexes[1];
zIndexes.base = zIndexes[0];
zIndexes.front = zIndexes[3];
zIndexes.nav = zIndexes[4];
zIndexes.overlay = zIndexes[5];

export { space, containerWidths, radii, zIndexes };
