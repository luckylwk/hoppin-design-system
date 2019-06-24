'use strict';

exports.__esModule = true;
exports.ExpandableContext = exports.ExpandableBody = exports.ExpandableToggle = exports.Expandable = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// context allows us to pass down the  toggle state to children without needing to manually set props.
var ExpandableContext = (0, _react.createContext)();

// Expandable is the parent component that holds  state and passes it down through context.
var Expandable = function Expandable(_ref) {
  var children = _ref.children,
      initExpanded = _ref.initExpanded;

  var _useState = (0, _react.useState)(initExpanded),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var toggleExpanded = function toggleExpanded() {
    setExpanded(!isExpanded);
  };
  return _react2.default.createElement(
    ExpandableContext.Provider,
    { value: { isExpanded: isExpanded, toggleExpanded: toggleExpanded } },
    children
  );
};

var ToggleBox = (0, _styledComponents2.default)(_Box.Box)(_templateObject);
var ExpandableToggle = function ExpandableToggle(_ref2) {
  var children = _ref2.children;

  var _useContext = (0, _react.useContext)(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  return _react2.default.createElement(
    ToggleBox,
    { onClick: toggleExpanded },
    children
  );
};

var ExpandableBody = function ExpandableBody(_ref3) {
  var children = _ref3.children;

  var _useContext2 = (0, _react.useContext)(ExpandableContext),
      isExpanded = _useContext2.isExpanded;

  return _react2.default.createElement(
    _Box.Box,
    { display: isExpanded ? 'block' : 'none' },
    children
  );
};

Expandable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: _propTypes2.default.any,
  /** Set the initial state, expanded or not. */
  initExpanded: _propTypes2.default.bool
} : {};

Expandable.defaultProps = {
  initExpanded: false
};

exports.Expandable = Expandable;
exports.ExpandableToggle = ExpandableToggle;
exports.ExpandableBody = ExpandableBody;
exports.ExpandableContext = ExpandableContext;