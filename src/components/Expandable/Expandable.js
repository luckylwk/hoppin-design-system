import React, { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

// context allows us to pass down the  toggle state to children without needing to manually set props.
const ExpandableContext = createContext();

// Expandable is the parent component that holds  state and passes it down through context.
const Expandable = ({ children, initExpanded, onToggle }) => {
  const [isExpanded, setExpanded] = useState(initExpanded);

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setExpanded(newState);
    onToggle && onToggle(newState);
  };
  return (
    <ExpandableContext.Provider value={{ isExpanded, toggleExpanded }}>
      {children}
    </ExpandableContext.Provider>
  );
};

const ToggleBox = styled(Box)`
  cursor: pointer;
`;
const ExpandableToggle = ({ children }) => {
  const { toggleExpanded } = useContext(ExpandableContext);

  return <ToggleBox onClick={toggleExpanded}>{children}</ToggleBox>;
};

const ExpandableBody = ({ children }) => {
  const { isExpanded } = useContext(ExpandableContext);

  return <Box display={isExpanded ? 'block' : 'none'}>{children}</Box>;
};

Expandable.propTypes = {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: propTypes.any,
  /** Set the initial state, expanded or not. */
  initExpanded: propTypes.bool,
  /** provide a custom callback on click, it reveives the new state of the Expandable*/
  onToggle: propTypes.func,
};

Expandable.defaultProps = {
  initExpanded: false,
};

export { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext };
