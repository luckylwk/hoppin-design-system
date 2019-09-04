import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import AlertIcon from 'react-feather/dist/icons/alert-triangle';

import { Text } from '../Text';
import { Box } from '../Box';

/**
 * Errors (array) will have the following structure:
 *
 * [ { msg: 'error message 1' }, { msg: 'error message 2' } ]
 */

const BoxDanger = styled(Box)`
  background-color: #edf0f2;

  border-left: 4px solid #dc3030;
`;

const Errors = ({ errors }) => (
  <Box>
    {errors.length > 0 && (
      <BoxDanger mt={2} py={2} px={3}>
        <Text display="block" style={{ color: '#881B1B' }} data-cy="error">
          {/* <span
            style={{
              background: 'white',
              padding: '5px 8px 3px',
              borderRadius: '50%',
              marginRight: '6px',
              border: '1px solid #DC3030',
            }}
          >
            <AlertIcon
              size={16}
              style={{
                position: 'relative',
                strokeWidth: '2px',
                color: '#DC3030',
              }}
            />
          </span> */}

          {errors[0].msg}
        </Text>
      </BoxDanger>
    )}
  </Box>
);

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
};

Errors.defaultProps = {
  errors: [],
  onlyShowOne: true,
};

Errors.displayName = 'Errors';

export default Errors;
