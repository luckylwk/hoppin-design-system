"use strict";

exports.__esModule = true;
exports.MenuButton = exports.MenuSheet = exports.MenuToggle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Navigation = require("./Navigation");

var _Button = require("../Button");

var _Flex = require("../Flex");

var _Box = require("../Box");

var _Logo = require("../Logo");

var _fi = require("react-icons/fi");

var _Expandable = require("../Expandable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  transition: margin-right ", ";\n\n  .isExpanded & {\n    margin-right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var MenuToggle = function MenuToggle() {
  return /*#__PURE__*/_react["default"].createElement(_Navigation.NavToggle, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "subtle"
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiMenu, null)));
};

exports.MenuToggle = MenuToggle;
MenuToggle.displayName = 'MenuToggle'; // ---------------------------

var MenuButton = (0, _styledComponents["default"])(_Button.Button)(_templateObject());
exports.MenuButton = MenuButton;
MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0
};
MenuButton.displayName = 'MenuButton'; // ---------------------------

var MenuSheetWrapper = (0, _styledComponents["default"])(_Flex.Flex)(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.motions.base;
}); // ---------------------------

var MenuSheet = function MenuSheet(_ref2) {
  var children = _ref2.children,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? 'primary' : _ref2$context,
      _ref2$onLogoClick = _ref2.onLogoClick,
      onLogoClick = _ref2$onLogoClick === void 0 ? function () {} : _ref2$onLogoClick,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "context", "onLogoClick"]);

  var _useContext = (0, _react.useContext)(_Expandable.ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded,
      isExpanded = _useContext.isExpanded;

  var handleLogoClick = function handleLogoClick(e) {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };

  return /*#__PURE__*/_react["default"].createElement(MenuSheetWrapper, {
    position: "absolute",
    height: "100%",
    width: ['100%', '85%', '35%'],
    marginRight: ['-100%', '-85%', '-35%'],
    right: 0,
    bg: "neutral.darker",
    padding: "large",
    flexDirection: "column",
    isExpanded: isExpanded
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    objectFit: "contain",
    onClick: handleLogoClick
  }, /*#__PURE__*/_react["default"].createElement(_Logo.Logo, {
    context: "whiteout"
  })), /*#__PURE__*/_react["default"].createElement(_Navigation.NavToggle, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "subtle",
    context: "whiteout",
    padding: ['xsmall', null, 'small']
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiX, null)))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, _extends({
    flexDirection: "column",
    flexGrow: 2,
    justifyItems: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  }, rest), children));
};

exports.MenuSheet = MenuSheet;
MenuSheet.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Works best with MenuButtons */
  children: _propTypes["default"].any,

  /** Callback for click on Logo, use to link up to your router implementation. */
  onLogoClick: _propTypes["default"].func
} : {};
MenuSheet.displayName = 'MenuSheet';