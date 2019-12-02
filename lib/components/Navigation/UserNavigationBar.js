'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fi = require('react-icons/fi');

var _Box = require('../Box');

var _Text = require('../Text');

var _Button = require('../Button');

var _ = require('.');

var _Image = require('../Image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UserNavigationBar = function UserNavigationBar(_ref) {
  var user = _ref.user,
      onExpandDetails = _ref.onExpandDetails,
      detailsExpanded = _ref.detailsExpanded,
      labelDefault = _ref.labelDefault,
      labelExpanded = _ref.labelExpanded,
      rest = _objectWithoutProperties(_ref, ['user', 'onExpandDetails', 'detailsExpanded', 'labelDefault', 'labelExpanded']);

  return _react2.default.createElement(
    _.NavigationBar,
    rest,
    _react2.default.createElement(
      _.NavLeft,
      null,
      _react2.default.createElement(
        _Box.Box,
        { flexGrow: 0 },
        user.profile.image_url && user.profile.image_url !== '' && _react2.default.createElement(_Image.Avatar, { size: 'icon', src: user.profile.image_url })
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
    ),
    _react2.default.createElement(
      _.NavRight,
      null,
      onExpandDetails && _react2.default.createElement(
        _Button.Button,
        { onClick: onExpandDetails, variant: 'outline' },
        detailsExpanded ? _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_fi.FiChevronUp, { size: 12 }),
          ' ',
          labelExpanded
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_fi.FiChevronDown, { size: 12 }),
          ' ',
          labelDefault
        )
      )
    )
  );
};

UserNavigationBar.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  onExpandDetails: _propTypes2.default.func,
  detailsExpanded: _propTypes2.default.bool,
  labelDefault: _propTypes2.default.string,
  labelExpanded: _propTypes2.default.string
} : {};

UserNavigationBar.defaultProps = {
  detailsExpanded: false,
  labelDefault: 'Details',
  labelExpanded: 'Continue'
};

UserNavigationBar.displayName = 'UserNavigationBar';

exports.default = UserNavigationBar;
module.exports = exports['default'];