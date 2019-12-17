import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Avatar } from '../Image';

var NavigationUser = function NavigationUser(_ref) {
  var user = _ref.user;
  return React.createElement(
    Flex,
    { alignItems: 'center', justifyContent: 'center' },
    React.createElement(
      Box,
      { flexGrow: 0 },
      user.profile.image_url && user.profile.image_url !== '' && React.createElement(Avatar, {
        size: 'icon',
        src: user.profile.image_url,
        display: 'inline-block'
      })
    ),
    React.createElement(
      Box,
      { flexGrow: 1, paddingLeft: 'small' },
      React.createElement(
        Text,
        { fontWeight: 'bold', display: 'block' },
        user.profile.first_name,
        ' ',
        user.profile.last_name
      )
    )
  );
};

NavigationUser.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired
} : {};

NavigationUser.displayName = 'NavigationUser';

export default NavigationUser;