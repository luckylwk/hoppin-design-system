"use strict";

exports.__esModule = true;
exports.ExpandableContext = exports.ExpandableBody = exports.ExpandableToggleIcon = exports.ExpandableToggle = exports.Expandable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _fi = require("react-icons/fi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  flex-grow: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
// context allows us to pass down the  toggle state to children without needing to manually set props.
var ExpandableContext = (0, _react.createContext)(); // ---------------------------
// Expandable is the parent component that holds  state and passes it down through context.

exports.ExpandableContext = ExpandableContext;

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

  return /*#__PURE__*/_react["default"].createElement(ExpandableContext.Provider, {
    value: {
      isExpanded: isExpanded,
      toggleExpanded: toggleExpanded
    }
  }, children);
};

exports.Expandable = Expandable;
Expandable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */

  /* TODO: figrue out how to code that in propTypes */
  children: _propTypes["default"].any,

  /** Set the initial state, expanded or not. */
  initExpanded: _propTypes["default"].bool,

  /** provide a custom callback on click, it reveives the new state of the Expandable*/
  onToggle: _propTypes["default"].func
} : {};
Expandable.defaultProps = {
  initExpanded: false
}; // ---------------------------

var ToggleBox = (0, _styledComponents["default"])(_Box.Box)(_templateObject()); // ---------------------------

var ExpandableToggle = function ExpandableToggle(_ref2) {
  var children = _ref2.children;

  var _useContext = (0, _react.useContext)(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  return /*#__PURE__*/_react["default"].createElement(ToggleBox, {
    onClick: toggleExpanded
  }, children);
};

exports.ExpandableToggle = ExpandableToggle;
ExpandableToggle.displayName = 'ExpandableToggle'; // ---------------------------

var ExpandableToggleIcon = function ExpandableToggleIcon(props) {
  var _useContext2 = (0, _react.useContext)(ExpandableContext),
      isExpanded = _useContext2.isExpanded;

  return isExpanded ? /*#__PURE__*/_react["default"].createElement(_fi.FiChevronUp, props) : /*#__PURE__*/_react["default"].createElement(_fi.FiChevronDown, props);
};

exports.ExpandableToggleIcon = ExpandableToggleIcon;
ExpandableToggleIcon.displayName = 'ToggleIcon'; // ---------------------------

var ExpandableBody = function ExpandableBody(_ref3) {
  var children = _ref3.children,
      toggleDisplay = _ref3.toggleDisplay;

  var _useContext3 = (0, _react.useContext)(ExpandableContext),
      isExpanded = _useContext3.isExpanded;

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    display: isExpanded ? 'block' : toggleDisplay ? 'none' : 'block'
  }, children);
};

exports.ExpandableBody = ExpandableBody;
ExpandableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any,

  /** set toggleDisplay to false if you're animating the transitions */
  toggleDisplay: _propTypes["default"].bool
} : {};
ExpandableBody.defaultProps = {
  toggleDisplay: true
};
ExpandableBody.displayName = 'ExpandableBody'; // ---------------------------