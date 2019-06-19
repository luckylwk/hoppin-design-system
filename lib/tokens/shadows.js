'use strict';

exports.__esModule = true;
exports.shadows = undefined;

var _space = require('./space');

var shadowColor = 'rgba(0,0,0,.05)';
var shadows = [0, '0 calc(' + _space.space.xsmall + ' - 2px) ' + _space.space.xsmall + ' ' + shadowColor, '0 calc(' + _space.space.small + ' - 2px) ' + _space.space.small + ' ' + shadowColor + ', 0 calc(' + _space.space.xsmall + ' - 2px) ' + _space.space.xsmall + ' ' + shadowColor, '0 calc(' + _space.space.base + ' - 2px) ' + _space.space.base + ' ' + shadowColor + ', 0 calc(' + _space.space.small + ' - 2px) ' + _space.space.small + ' ' + shadowColor, '0 calc(' + _space.space.large + ' - 2px) ' + _space.space.large + ' ' + shadowColor + ', 0 calc(' + _space.space.base + ' - 2px) ' + _space.space.base + ' ' + shadowColor, '0 calc(' + _space.space.xlarge + ' - 2px) ' + _space.space.xlarge + ' ' + shadowColor + ', 0 calc(' + _space.space.large + ' - 2px) ' + _space.space.large + ' ' + shadowColor];

shadows.xsmall = shadows[1];
shadows.small = shadows[2];
shadows.base = shadows[3];
shadows.large = shadows[4];
shadows.xlarge = shadows[5];

exports.shadows = shadows;