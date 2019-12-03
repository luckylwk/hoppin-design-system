'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Text = require('../Text');

var _Image = require('../Image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationUser = function NavigationUser(_ref) {
  var user = _ref.user;
  return _react2.default.createElement(
    _Flex.Flex,
    { alignItems: 'center', justifyContent: 'center' },
    _react2.default.createElement(
      _Box.Box,
      { flexGrow: 0 },
      user.profile.image_url && user.profile.image_url !== '' && _react2.default.createElement(_Image.Avatar, {
        variant: 'icon',
        src: user.profile.image_url,
        display: 'inline-block'
      })
    ),
    _react2.default.createElement(
      _Box.Box,
      { flexGrow: 1, paddingLeft: 'small' },
      _react2.default.createElement(
        _Text.Text,
        { fontWeight: 'bold', display: 'block' },
        user.profile.first_name,
        ' ',
        user.profile.last_name
      )
    )
  );
};

NavigationUser.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired
} : {};

NavigationUser.defaultProps = {};

NavigationUser.displayName = 'NavigationUser';

exports.default = NavigationUser;
module.exports = exports['default'];