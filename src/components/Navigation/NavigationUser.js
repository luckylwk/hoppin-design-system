import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Avatar } from '../Image';

const NavigationUser = ({ user }) => (
  <Flex alignItems="center" justifyContent="center">
    <Box flexGrow={0}>
      {user.profile.image_url && user.profile.image_url !== '' && (
        <Avatar
          size="icon"
          src={user.profile.image_url}
          display="inline-block"
        />
      )}
    </Box>
    <Box flexGrow={1} paddingLeft="small">
      <Text fontWeight="bold" display="block">
        {user.profile.first_name} {user.profile.last_name}
      </Text>
    </Box>
  </Flex>
);

NavigationUser.propTypes = {
  user: PropTypes.object.isRequired,
};

NavigationUser.displayName = 'NavigationUser';

export default NavigationUser;
