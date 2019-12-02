import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { NavigationBar, NavLeft, NavRight } from '.';
import { Avatar } from '../Image';

const UserNavigationBar = ({
  user,
  onExpandDetails,
  detailsExpanded,
  labelDefault,
  labelExpanded,
  ...rest
}) => (
  <NavigationBar {...rest}>
    <NavLeft>
      <Box flexGrow={0}>
        {user.profile.image_url && user.profile.image_url !== '' && (
          <Avatar size="icon" src={user.profile.image_url} />
        )}
      </Box>
      <Box flexGrow={1} paddingLeft="small">
        <Text fontWeight="bold" display="block">
          {user.profile.first_name} {user.profile.last_name}
        </Text>
      </Box>
    </NavLeft>
    <NavRight>
      {onExpandDetails && (
        <Button onClick={onExpandDetails} variant="outline">
          {detailsExpanded ? (
            <Fragment>
              <FiChevronUp size={12} /> {labelExpanded}
            </Fragment>
          ) : (
            <Fragment>
              <FiChevronDown size={12} /> {labelDefault}
            </Fragment>
          )}
        </Button>
      )}
    </NavRight>
  </NavigationBar>
);

UserNavigationBar.propTypes = {
  user: PropTypes.object.isRequired,
  onExpandDetails: PropTypes.func,
  detailsExpanded: PropTypes.bool,
  labelDefault: PropTypes.string,
  labelExpanded: PropTypes.string,
};

UserNavigationBar.defaultProps = {
  detailsExpanded: false,
  labelDefault: 'Details',
  labelExpanded: 'Continue',
};

UserNavigationBar.displayName = 'UserNavigationBar';

export default UserNavigationBar;
