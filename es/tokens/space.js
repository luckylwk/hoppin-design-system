// based on 16px = 1em:

var space = [0, '.25rem', // 4px
'.5rem', // 8px
'1rem', // 16px
'1.5rem', // 24px
'3rem', // 48px
'4rem', // 64px
'5rem'];

space.xsmall = space[1];
space.small = space[2];
space.base = space[3];
space.medium = space[3];
space.large = space[4];
space.xlarge = space[5];

var containerWidths = {
  narrow: '45rem',
  base: '60rem',
  full: '100%'
};
containerWidths.normal = containerWidths.base;

var radii = [0, space.xsmall, space.small, space.base, space.large, '100%'];

radii.none = radii[1];
radii.xsmall = radii[1];
radii.small = radii[2];
radii.medium = radii[3];
radii.large = radii[4];
radii.xlarge = radii[5];

var zIndexes = [0, 3, 5, 8, 13];

zIndexes.farBack = zIndexes[-3];
zIndexes.back = zIndexes[-1];
zIndexes.base = zIndexes[0];
zIndexes.front = zIndexes[3];
zIndexes.overlay = zIndexes[4];

export { space, containerWidths, radii, zIndexes };