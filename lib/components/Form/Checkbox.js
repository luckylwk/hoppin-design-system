'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  fill: none;\n  stroke: white;\n  stroke-width: 4px;\n'], ['\n  fill: none;\n  stroke: white;\n  stroke-width: 4px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n'], ['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 1px solid ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n'], ['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 1px solid ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

var CheckboxContainer = _styledComponents2.default.div(_templateObject);

var Icon = _styledComponents2.default.svg(_templateObject2);

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
_rcCheckbox2.default.displayName = 'RcCheckbox';
var HiddenCheckbox = (0, _styledComponents2.default)(_rcCheckbox2.default)(_templateObject3);
HiddenCheckbox.displayName = 'HiddenCheckbox';

var StyledCheckbox = _styledComponents2.default.div(_templateObject4, _Label2.default, function (_ref) {
  var theme = _ref.theme;
  return theme.space.small;
}, function (_ref2) {
  var checked = _ref2.checked,
      theme = _ref2.theme;
  return checked ? theme.colors.primary.base : theme.colors.primary.lighter;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary.base;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.xsmall;
}, HiddenCheckbox, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows.xsmall;
}, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
});
StyledCheckbox.displayName = 'StyledCheckbox';

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClick = function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          checked = _this$props.checked,
          onChange = _this$props.onChange;

      onChange({ target: { checked: !checked } });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        checked = _props.checked,
        type = _props.type,
        label = _props.label;


    var CheckBoxWrapper = label ? _Label2.default : CheckboxContainer;
    return _react2.default.createElement(
      CheckBoxWrapper,
      { onClick: this.onClick, htmlFor: name },
      _react2.default.createElement(HiddenCheckbox, { checked: checked, name: name }),
      _react2.default.createElement(
        StyledCheckbox,
        { checked: checked, type: type },
        _react2.default.createElement(
          Icon,
          { viewBox: '0 0 24 24' },
          _react2.default.createElement('polyline', { points: '20 6 9 17 4 12' })
        )
      ),
      label
    );
  };

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: _propTypes2.default.string
} : {};

Checkbox.displayName = 'Checkbox';

exports.default = Checkbox;
module.exports = exports['default'];