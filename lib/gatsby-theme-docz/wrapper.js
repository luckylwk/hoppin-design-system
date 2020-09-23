"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DesignProvider = require("../../../src/components/DesignProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_DesignProvider.DesignProvider, null, children);
};

exports["default"] = _default;
module.exports = exports.default;