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

space.tiny = space[1];
space.small = space[2];
space.base = space[3];
space.large = space[4];
space.xlarge = space[5];

export default space;
