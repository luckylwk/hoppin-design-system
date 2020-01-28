'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('../Flex');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * ButtonGroup component. Helps arrange groups of buttons
 */

var ButtonGroup = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      flexDirection = _ref.flexDirection;

  if (flexDirection === 'row') {
    return _Button2.default + ' + ' + _Button2.default + ' {\n        margin-left: ' + theme.space.small + ';\n      }';
  } else {
    return _Button2.default + ' + ' + _Button2.default + ' {\n        margin-top: ' + theme.space.small + ';\n      }';
  }
});

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {
  width: 1, // fill available space
  flexDirection: 'row', // horizontal row of buttons
  justifyContent: 'flex-start', // align left
  flexWrap: 'wrap'
};

ButtonGroup.displayName = 'ButtonGroup';

exports.default = ButtonGroup;
module.exports = exports['default'];