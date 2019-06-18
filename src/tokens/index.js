import { colors } from './colors';
import { space, containerWidth } from './space';
import { buttonSizes } from './buttons';
import { shadows } from './shadows';
import {
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  headings,
} from './typography';

/* exports theme object.
   make sure to set mode='host' or mod='hopper' in the HoppinDesignProvider to select primary colors.
   - 'host'   => primary is host pink
   - 'hopper' => primary is hopper blue

*/

export default {
  space,
  containerWidth,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  headings,
  buttonSizes,
  shadows,
};
