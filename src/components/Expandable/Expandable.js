import React, { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

import { Box } from '../Box';

// context allows us to pass down the  toggle state to children without needing to manually set props.
const ExpandableContext = createContext();

// Expandable is the parent component that holds  state and passes it down through context.
const Expandable = ({ children }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };
  return (
    <ExpandableContext.Provider value={{ isExpanded, toggleExpanded }}>
      {children}
    </ExpandableContext.Provider>
  );
};

const ExpandableToggle = ({ children }) => {
  const { toggleExpanded } = useContext(ExpandableContext);

  return <Box onClick={toggleExpanded}>{children}</Box>;
};

const ExpandableBody = ({ children }) => {
  const { isExpanded } = useContext(ExpandableContext);

  return <Box display={isExpanded ? 'block' : 'none'}>{children}</Box>;
};

Expandable.propTypes = {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: propTypes.any,
};

export { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext };
