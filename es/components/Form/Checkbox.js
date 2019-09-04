var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  fill: none;\n  stroke: white;\n  stroke-width: 4px;\n'], ['\n  fill: none;\n  stroke: white;\n  stroke-width: 4px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n'], ['\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 1px solid ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n'], ['\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n  ', ' & {\n    margin-right: ', ';\n  }\n\n  background: ', ';\n  border: 1px solid ', ';\n\n  border-radius: ', ';\n\n  transition: all 150ms;\n\n  ', ':focus + & {\n    box-shadow: ', ';\n  }\n\n  ', ' {\n    visibility: ', ';\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import CheckboxLabel from './Label';

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

var CheckboxContainer = styled.div(_templateObject);

var Icon = styled.svg(_templateObject2);

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
RcCheckbox.displayName = 'RcCheckbox';
var HiddenCheckbox = styled(RcCheckbox)(_templateObject3);
HiddenCheckbox.displayName = 'HiddenCheckbox';

var StyledCheckbox = styled.div(_templateObject4, CheckboxLabel, function (_ref) {
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


    var CheckBoxWrapper = label ? CheckboxLabel : CheckboxContainer;
    return React.createElement(
      CheckBoxWrapper,
      { onClick: this.onClick, htmlFor: name },
      React.createElement(HiddenCheckbox, { checked: checked, name: name }),
      React.createElement(
        StyledCheckbox,
        { checked: checked, type: type },
        React.createElement(
          Icon,
          { viewBox: '0 0 24 24' },
          React.createElement('polyline', { points: '20 6 9 17 4 12' })
        )
      ),
      label
    );
  };

  return Checkbox;
}(Component);

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  /** Omit label prop to render Checkbox without a label */
  label: PropTypes.string
} : {};

Checkbox.displayName = 'Checkbox';

export default Checkbox;