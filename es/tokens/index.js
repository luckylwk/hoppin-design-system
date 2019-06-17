import { default as colors } from './colors';
import { default as space } from './space';
import { default as buttonSizes } from './buttons';
import { default as shadows } from './shadows';
import { fonts, fontSizes, lineHeights, fontWeights, headings } from './typography';

/* exports theme object.
   make sure to set mode='host' or mod='hopper' in the HoppinDesignProvider to select primary colors.
   - 'host'   => primary is host pink
   - 'hopper' => primary is hopper blue

*/

export default {
  space: space,
  fonts: fonts,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
  colors: colors,
  headings: headings,
  buttonSizes: buttonSizes,
  shadows: shadows
};