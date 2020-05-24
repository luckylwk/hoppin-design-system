import { space } from './space';

var shadowColor = 'rgba(0, 0, 0, .05)';
var shadows = ['none', '0 calc(' + space.xsmall + ' - 2px) ' + space.xsmall + ' ' + shadowColor, '0 calc(' + space.small + ' - 2px) ' + space.small + ' ' + shadowColor + ', 0 calc(' + space.xsmall + ' - 2px) ' + space.xsmall + ' ' + shadowColor, '0 calc(' + space.base + ' - 2px) ' + space.base + ' ' + shadowColor + ', 0 calc(' + space.small + ' - 2px) ' + space.small + ' ' + shadowColor, '0 calc(' + space.large + ' - 2px) ' + space.large + ' ' + shadowColor + ', 0 calc(' + space.base + ' - 2px) ' + space.base + ' ' + shadowColor, '0 calc(' + space.xlarge + ' - 2px) ' + space.xlarge + ' ' + shadowColor + ', 0 calc(' + space.large + ' - 2px) ' + space.large + ' ' + shadowColor];

shadows.none = shadows[0];
shadows.xsmall = shadows[1];
shadows.small = shadows[2];
shadows.base = shadows[3];
shadows.medium = shadows[3];
shadows.large = shadows[4];
shadows.xlarge = shadows[5];

export { shadows };