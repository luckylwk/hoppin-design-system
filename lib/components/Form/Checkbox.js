'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  fill: none;\n  stroke: ', ';\n  stroke-width: 4px;\n'], ['\n  fill: none;\n  stroke: ', ';\n  stroke-width: 4px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 2px;\n'], ['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 2px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 2px solid\n    ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n'], ['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 2px solid\n    ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

// ---------------------------

var CheckboxContainer = _styledComponents2.default.div(_templateObject);

// ---------------------------

var Icon = _styledComponents2.default.svg(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.dark;
});

// ---------------------------

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
_rcCheckbox2.default.displayName = 'RcCheckbox';

// ---------------------------

var HiddenCheckbox = (0, _styledComponents2.default)(_rcCheckbox2.default)(_templateObject3);

HiddenCheckbox.displayName = 'HiddenCheckbox';

// ---------------------------

var StyledCheckbox = _styledComponents2.default.div(_templateObject4, _Label2.default, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.small;
}, function (_ref3) {
  var checked = _ref3.checked,
      theme = _ref3.theme;
  return !checked ? theme.colors.neutral.lightest : theme.colors.primary.lightest;
}, function (_ref4) {
  var checked = _ref4.checked,
      theme = _ref4.theme;
  return !checked ? theme.colors.neutral.lighter : theme.colors.primary.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.radii.xsmall;
}, HiddenCheckbox, function (_ref6) {
  var theme = _ref6.theme;
  return theme.shadows.xsmall;
}, Icon, function (_ref7) {
  var checked = _ref7.checked;
  return checked ? 'visible' : 'hidden';
});

StyledCheckbox.displayName = 'StyledCheckbox';

// ---------------------------

var Checkbox = function Checkbox(_ref8) {
  var name = _ref8.name,
      checked = _ref8.checked,
      label = _ref8.label,
      onChange = _ref8.onChange;

  var onClick = function onClick(e) {
    e.preventDefault();
    onChange({
      target: {
        type: 'checkbox',
        name: name,
        value: !checked ? 'on' : null,
        checked: !checked
      }
    });
  };
  var CheckBoxWrapper = label ? _Label2.default : CheckboxContainer;

  return _react2.default.createElement(
    CheckBoxWrapper,
    { onClick: onClick, htmlFor: name },
    _react2.default.createElement(HiddenCheckbox, { checked: checked, name: name }),
    _react2.default.createElement(
      StyledCheckbox,
      { checked: checked },
      _react2.default.createElement(
        Icon,
        { viewBox: '0 0 24 24' },
        _react2.default.createElement('polyline', { points: '20 6 9 17 4 12' })
      )
    ),
    label
  );
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: _propTypes2.default.string
} : {};

Checkbox.defaultProps = {
  checked: false
};

Checkbox.displayName = 'Checkbox';

exports.default = Checkbox;
module.exports = exports['default'];