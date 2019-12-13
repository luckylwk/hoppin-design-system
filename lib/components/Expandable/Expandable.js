'use strict';

exports.__esModule = true;
exports.ExpandableContext = exports.ExpandableBody = exports.ExpandableToggleIcon = exports.ExpandableToggle = exports.Expandable = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  cursor: pointer;\n  flex-grow: 0;\n'], ['\n  cursor: pointer;\n  flex-grow: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _fi = require('react-icons/fi');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// context allows us to pass down the toggle state to children without needing to manually set props.
var ExpandableContext = (0, _react.createContext)();

// Expandable is the parent component that holds  state and passes it down through context.
var Expandable = function Expandable(_ref) {
  var children = _ref.children,
      initExpanded = _ref.initExpanded,
      onToggle = _ref.onToggle;

  var _useState = (0, _react.useState)(initExpanded),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var toggleExpanded = function toggleExpanded() {
    var newState = !isExpanded;
    setExpanded(newState);
    onToggle && onToggle(newState);
  };

  return _react2.default.createElement(
    ExpandableContext.Provider,
    { value: { isExpanded: isExpanded, toggleExpanded: toggleExpanded } },
    children
  );
};

Expandable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: _propTypes2.default.any,
  /** Set the initial state, expanded or not. */
  initExpanded: _propTypes2.default.bool,
  /** provide a custom callback on click, it reveives the new state of the Expandable*/
  onToggle: _propTypes2.default.func
} : {};

Expandable.defaultProps = {
  initExpanded: false
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
ExpandableToggle.displayName = 'ExpandableToggle';

var ExpandableToggleIcon = function ExpandableToggleIcon(props) {
  var _useContext2 = (0, _react.useContext)(ExpandableContext),
      isExpanded = _useContext2.isExpanded;

  return isExpanded ? _react2.default.createElement(_fi.FiChevronUp, props) : _react2.default.createElement(_fi.FiChevronDown, props);
};
ExpandableToggleIcon.displayName = 'ToggleIcon';

var ExpandableBody = function ExpandableBody(_ref3) {
  var children = _ref3.children,
      toggleDisplay = _ref3.toggleDisplay;

  var _useContext3 = (0, _react.useContext)(ExpandableContext),
      isExpanded = _useContext3.isExpanded;

  return _react2.default.createElement(
    _Box.Box,
    { display: isExpanded ? 'block' : toggleDisplay ? 'none' : 'block' },
    children
  );
};

ExpandableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.any,
  /** set toggleDisplay to false if you're animating the transitions */
  toggleDisplay: _propTypes2.default.bool
} : {};

ExpandableBody.defaultProps = {
  toggleDisplay: true
};
ExpandableBody.displayName = 'ExpandableBody';

exports.Expandable = Expandable;
exports.ExpandableToggle = ExpandableToggle;
exports.ExpandableToggleIcon = ExpandableToggleIcon;
exports.ExpandableBody = ExpandableBody;
exports.ExpandableContext = ExpandableContext;