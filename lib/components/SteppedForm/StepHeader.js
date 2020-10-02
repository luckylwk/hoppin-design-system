"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Heading = require("../Heading");

var _Lede = require("../Lede");

var _Markdown = require("../Markdown");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StepHeader = function StepHeader(_ref) {
  var title = _ref.title,
      lede = _ref.lede;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, title && title.length > 0 && /*#__PURE__*/_react["default"].createElement(_Heading.Heading, {
    paddingTop: [1, 1, 4],
    paddingBottom: [0, 0, 2]
  }, title), lede && lede.length > 0 && /*#__PURE__*/_react["default"].createElement(_Lede.Lede, {
    as: "div"
  }, /*#__PURE__*/_react["default"].createElement(_Markdown.Markdown, null, lede)));
};

StepHeader.displayName = 'StepHeader';
var _default = StepHeader;
exports["default"] = _default;
module.exports = exports.default;