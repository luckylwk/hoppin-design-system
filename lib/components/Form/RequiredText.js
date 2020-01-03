'use strict';

exports.__esModule = true;
exports.RequiredText = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } // import PropTypes from 'prop-types';


var RequiredText = exports.RequiredText = _styledComponents2.default.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
});

RequiredText.propTypes = {
  // color: PropTypes.string,
};

RequiredText.defaultProps = {
  // color: 'primary.base',
};

RequiredText.displayName = 'RequiredText';

exports.default = RequiredText;