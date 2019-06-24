var _templateObject = _taggedTemplateLiteralLoose(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

// context allows us to pass down the  toggle state to children without needing to manually set props.
var ExpandableContext = createContext();

// Expandable is the parent component that holds  state and passes it down through context.
var Expandable = function Expandable(_ref) {
  var children = _ref.children,
      initExpanded = _ref.initExpanded;

  var _useState = useState(initExpanded),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var toggleExpanded = function toggleExpanded() {
    setExpanded(!isExpanded);
  };
  return React.createElement(
    ExpandableContext.Provider,
    { value: { isExpanded: isExpanded, toggleExpanded: toggleExpanded } },
    children
  );
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
  var children = _ref3.children;

  var _useContext2 = useContext(ExpandableContext),
      isExpanded = _useContext2.isExpanded;

  return React.createElement(
    Box,
    { display: isExpanded ? 'block' : 'none' },
    children
  );
};

Expandable.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: propTypes.any,
  /** Set the initial state, expanded or not. */
  initExpanded: propTypes.bool
} : {};

Expandable.defaultProps = {
  initExpanded: false
};

export { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext };