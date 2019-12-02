function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { NavigationBar, NavLeft, NavRight } from '.';
import { Avatar } from '../Image';

var UserNavigationBar = function UserNavigationBar(_ref) {
  var user = _ref.user,
      onExpandDetails = _ref.onExpandDetails,
      detailsExpanded = _ref.detailsExpanded,
      labelDefault = _ref.labelDefault,
      labelExpanded = _ref.labelExpanded,
      rest = _objectWithoutProperties(_ref, ['user', 'onExpandDetails', 'detailsExpanded', 'labelDefault', 'labelExpanded']);

  return React.createElement(
    NavigationBar,
    rest,
    React.createElement(
      NavLeft,
      null,
      React.createElement(
        Box,
        { flexGrow: 0 },
        user.profile.image_url && user.profile.image_url !== '' && React.createElement(Avatar, { size: 'icon', src: user.profile.image_url })
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
    ),
    React.createElement(
      NavRight,
      null,
      onExpandDetails && React.createElement(
        Button,
        { onClick: onExpandDetails, variant: 'outline' },
        detailsExpanded ? React.createElement(
          Fragment,
          null,
          React.createElement(FiChevronUp, { size: 12 }),
          ' ',
          labelExpanded
        ) : React.createElement(
          Fragment,
          null,
          React.createElement(FiChevronDown, { size: 12 }),
          ' ',
          labelDefault
        )
      )
    )
  );
};

UserNavigationBar.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  onExpandDetails: PropTypes.func,
  detailsExpanded: PropTypes.bool,
  labelDefault: PropTypes.string,
  labelExpanded: PropTypes.string
} : {};

UserNavigationBar.defaultProps = {
  detailsExpanded: false,
  labelDefault: 'Details',
  labelExpanded: 'Continue'
};

UserNavigationBar.displayName = 'UserNavigationBar';

export default UserNavigationBar;