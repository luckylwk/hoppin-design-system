import { default as colors } from './colors';
import { default as space } from './space';
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
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  headings,
};
