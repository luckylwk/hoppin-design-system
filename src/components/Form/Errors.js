import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../Text';
import { Box } from '../Box';
import { Paragraph } from '../Paragraph';

// ---------------------------

const BoxDanger = styled(Box)`
  background-color: ${({ theme }) => theme.colors.danger.lightest};
  border-left: 4px solid ${({ theme }) => theme.colors.danger.base};
  border-radius: ${({ theme }) => theme.radii.small};
`;

// ---------------------------

const Errors = ({ errors }) => (
  <Box>
    {errors.length > 0 && (
      <BoxDanger mt={2} py={2} px={3}>
        <Text display="block" color="error.darker" data-cy="error">
          {errors.map(error => (
            <Paragraph marginBottom={0} key={error.msg || error.message}>
              {error.msg || error.message}
            </Paragraph>
          ))}
        </Text>
      </BoxDanger>
    )}
  </Box>
);

Errors.propTypes = {
  /** [ { msg: 'Custom errors from the backend' }, new Error("And standard errors are supported") ] */
  errors: PropTypes.array.isRequired,
};

Errors.defaultProps = {
  errors: [],
  onlyShowOne: true,
};

Errors.displayName = 'Errors';

export default Errors;
