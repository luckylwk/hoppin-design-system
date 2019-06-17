'use strict';

exports.__esModule = true;

var _space = require('./space');

var _space2 = _interopRequireDefault(_space);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowColor = 'rgba(0,0,0,.05)';
var shadows = [0, '0 calc(' + _space2.default.tiny + ' - 2px) ' + _space2.default.tiny + ' ' + shadowColor, '0 calc(' + _space2.default.small + ' - 2px) ' + _space2.default.small + ' ' + shadowColor + ', 0 calc(' + _space2.default.tiny + ' - 2px) ' + _space2.default.tiny + ' ' + shadowColor, '0 calc(' + _space2.default.base + ' - 2px) ' + _space2.default.base + ' ' + shadowColor + ', 0 calc(' + _space2.default.small + ' - 2px) ' + _space2.default.small + ' ' + shadowColor, '0 calc(' + _space2.default.large + ' - 2px) ' + _space2.default.large + ' ' + shadowColor + ', 0 calc(' + _space2.default.base + ' - 2px) ' + _space2.default.base + ' ' + shadowColor, '0 calc(' + _space2.default.xlarge + ' - 2px) ' + _space2.default.xlarge + ' ' + shadowColor + ', 0 calc(' + _space2.default.large + ' - 2px) ' + _space2.default.large + ' ' + shadowColor];

shadows.tiny = shadows[1];
shadows.small = shadows[2];
shadows.base = shadows[3];
shadows.large = shadows[4];
shadows.xlarge = shadows[5];

exports.default = shadows;
module.exports = exports['default'];