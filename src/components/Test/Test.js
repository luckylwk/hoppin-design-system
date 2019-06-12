import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Test = ({ fontSize, children }) => (
  <div style={{fontSize}}>{children}</div>
)

Test.propTypes = {
  /** Specify the font size here. */
  fontSize: PropTypes.string
}

Test.defaultProps = {
  fontSize: '1em'
}

Test.displayName = 'Test'

export default Test;
