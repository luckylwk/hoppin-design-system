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

// Previously: space[1], space[2], space[3]
var buttonIconSpacing = {
  small: {
    padding: '4px'
  },
  base: {
    padding: '7px 8px'
  },
  large: {
    padding: '14px 16px'
  }
};

export { buttonSizes, buttonIconSpacing };