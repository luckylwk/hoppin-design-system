import { space } from './space';
import { fontSizes } from './typography';

var buttonSizes = {
  small: {
    fontSize: fontSizes[3],
    padding: space[1] + ' ' + space[3]
  },
  base: {
    fontSize: fontSizes[3],
    padding: space[2] + ' ' + space[4]
  },
  large: {
    fontSize: fontSizes[4],
    padding: space[3] + ' ' + space[5]
  }
};

export { buttonSizes };