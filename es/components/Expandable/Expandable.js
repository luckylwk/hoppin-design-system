var _templateObject = _taggedTemplateLiteralLoose(['\n  cursor: pointer;\n  flex-grow: 0;\n'], ['\n  cursor: pointer;\n  flex-grow: 0;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

// context allows us to pass down the  toggle state to children without needing to manually set props.
var ExpandableContext = createContext();

// Expandable is the parent component that holds  state and passes it down through context.
var Expandable = function Expandable(_ref) {
  var children = _ref.children,
      initExpanded = _ref.initExpanded,
      onToggle = _ref.onToggle;

  var _useState = useState(initExpanded),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var toggleExpanded = function toggleExpanded() {
    var newState = !isExpanded;
    setExpanded(newState);
    onToggle && onToggle(newState);
  };
  return React.createElement(
    ExpandableContext.Provider,
    { value: { isExpanded: isExpanded, toggleExpanded: toggleExpanded } },
    children
  );
};

Expandable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: PropTypes.any,
  /** Set the initial state, expanded or not. */
  initExpanded: PropTypes.bool,
  /** provide a custom callback on click, it reveives the new state of the Expandable*/
  onToggle: PropTypes.func
} : {};

Expandable.defaultProps = {
  initExpanded: false
};

var ToggleBox = styled(Box)(_templateObject);
var ExpandableToggle = function ExpandableToggle(_ref2) {
  var children = _ref2.children;

  var _useContext = useContext(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  return React.createElement(
    ToggleBox,
    { onClick: toggleExpanded },
    children
  );
};

var ExpandableBody = function ExpandableBody(_ref3) {
  var children = _ref3.children,
      toggleDisplay = _ref3.toggleDisplay;

  var _useContext2 = useContext(ExpandableContext),
      isExpanded = _useContext2.isExpanded;

  return React.createElement(
    Box,
    { display: isExpanded ? 'block' : toggleDisplay ? 'none' : 'block' },
    children
  );
};

ExpandableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any,
  /** set toggleDisplay to false if you're animating the transitions */
  toggleDisplay: PropTypes.bool
} : {};

ExpandableBody.defaultProps = {
  toggleDisplay: true
};
ExpandableBody.displayName = 'ExpandableBody';

export { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext };