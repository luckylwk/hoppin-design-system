import React from 'react';
import styled from 'styled-components';

import { Card } from 'components/Card';

const Swatch = styled(Card)`
  border-top: none;
`;

export default ({ prefix, colors }) => {
  return Object.keys(colors).map(color => {
    return (
      <Swatch bg={colors[color]} margin="xsmall" key={`${prefix}${color}`}>
        {prefix}
        {color}
      </Swatch>
    );
  });
};
