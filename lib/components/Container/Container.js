'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

var _Flex = require('../Flex');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidths[width];
});

Container.propTypes = {
  // ...Flex.propTypes,
  /** Set `width="narrow"` for to optimize body text width, set it to `base` for a wider layout, `full` to fill any available space. */
  width: _propTypes2.default.oneOf(['narrow', 'base', 'full']),
  /** Only set `maxWidth` if absolutely necessary and you cant use narrow/base widths. */
  maxWidth: _propTypes2.default.string
};

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge']
};

Container.displayName = 'Container';

exports.default = Container;
module.exports = exports['default'];