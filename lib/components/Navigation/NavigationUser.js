"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = require("../Flex");

var _Box = require("../Box");

var _Text = require("../Text");

var _Image = require("../Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavigationUser = function NavigationUser(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    flexGrow: 0
  }, user.profile.image_url && user.profile.image_url !== '' && /*#__PURE__*/_react["default"].createElement(_Image.Avatar, {
    size: "icon",
    src: user.profile.image_url,
    display: "inline-block"
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    flexGrow: 1,
    paddingLeft: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    fontWeight: "bold",
    display: "block"
  }, user.profile.first_name, " ", user.profile.last_name)));
};

NavigationUser.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes["default"].object.isRequired
} : {};
NavigationUser.displayName = 'NavigationUser';
var _default = NavigationUser;
exports["default"] = _default;
module.exports = exports.default;