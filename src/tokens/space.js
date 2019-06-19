// based on 16px = 1em:

const space = [
  0,
  '.25rem', // 4px
  '.5rem', // 8px
  '1rem', // 16px
  '1.5rem', // 24px
  '3rem', // 48px
  '4rem', // 64px
  '5rem', // 80px
];

space.xsmall = space[1];
space.small = space[2];
space.base = space[3];
space.medium = space[3];
space.large = space[4];
space.xlarge = space[5];

const containerWidth = '60rem';

const radii = [0, space.xsmall, space.small, space.base, space.large, '100%'];

radii.none = radii[1];
radii.xsmall = radii[1];
radii.small = radii[2];
radii.medium = radii[3];
radii.large = radii[4];
radii.xlarge = radii[5];

export { space, containerWidth, radii };
