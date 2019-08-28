import { space } from './space';
import { fontSizes } from './typography';

const buttonSizes = {
  small: {
    fontSize: fontSizes[3],
    padding: `${space[1]} ${space[3]}`,
  },
  base: {
    fontSize: fontSizes[3],
    padding: `${space[2]} ${space[4]}`,
  },
  large: {
    fontSize: fontSizes[4],
    padding: `${space[3]} ${space[5]}`,
  },
};

const buttonIconSpacing = {
  small: {
    padding: `${space[1]}`,
  },
  base: {
    padding: `${space[2]}`,
  },
  large: {
    padding: `${space[3]}`,
  },
};

export { buttonSizes, buttonIconSpacing };
