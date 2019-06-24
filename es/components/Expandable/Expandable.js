import React, { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

import { Box } from '../Box';

// context allows us to pass down the  toggle state to children without needing to manually set props.
var ExpandableContext = createContext();

// Expandable is the parent component that holds  state and passes it down through context.
var Expandable = function Expandable(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
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

var ExpandableToggle = function ExpandableToggle(_ref2) {
  var children = _ref2.children;

  var _useContext = useContext(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  return React.createElement(
    Box,
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
  children: propTypes.any
} : {};

export { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext };