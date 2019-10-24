import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

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

Expandable.propTypes = {
  /** Expandable needs exactly one instance of ExpandableToggle and one instance of ExpandableBody */
  /* TODO: figrue out how to code that in propTypes */
  children: PropTypes.any,
  /** Set the initial state, expanded or not. */
  initExpanded: PropTypes.bool,
  /** provide a custom callback on click, it reveives the new state of the Expandable*/
  onToggle: PropTypes.func,
};

Expandable.defaultProps = {
  initExpanded: false,
};

const ToggleBox = styled(Box)`
  cursor: pointer;
  flex-grow: 0;
`;
const ExpandableToggle = ({ children }) => {
  const { toggleExpanded } = useContext(ExpandableContext);

  return <ToggleBox onClick={toggleExpanded}>{children}</ToggleBox>;
};
ExpandableToggle.displayName = 'ExpandableToggle';

const ExpandableToggleIcon = props => {
  const { isExpanded } = useContext(ExpandableContext);

  return isExpanded ? <FiChevronUp {...props} /> : <FiChevronDown {...props} />;
};
ExpandableToggleIcon.displayName = 'ToggleIcon';

const ExpandableBody = ({ children, toggleDisplay }) => {
  const { isExpanded } = useContext(ExpandableContext);
  return (
    <Box display={isExpanded ? 'block' : toggleDisplay ? 'none' : 'block'}>
      {children}
    </Box>
  );
};

ExpandableBody.propTypes = {
  children: PropTypes.any,
  /** set toggleDisplay to false if you're animating the transitions */
  toggleDisplay: PropTypes.bool,
};

ExpandableBody.defaultProps = {
  toggleDisplay: true,
};
ExpandableBody.displayName = 'ExpandableBody';

export {
  Expandable,
  ExpandableToggle,
  ExpandableToggleIcon,
  ExpandableBody,
  ExpandableContext,
};
