import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var Test = function Test(_ref) {
  var fontSize = _ref.fontSize,
      children = _ref.children;
  return React.createElement(
    'div',
    { style: { fontSize: fontSize } },
    children
  );
};

Test.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Specify the font size here. */
  fontSize: PropTypes.string
} : {};

Test.defaultProps = {
  fontSize: '1em'
};

Test.displayName = 'Test';

export default Test;