"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NavigationBar = _interopRequireDefault(require("./NavigationBar"));

var _Expandable = require("../Expandable");

exports.NavToggle = _Expandable.ExpandableToggle;

var _Box = require("../Box");

var _Overlay = require("../Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: fixed;\n\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n  transform: translate3d(100vw, 0, 0);\n  opacity: 0;\n  transition: opacity ", ",\n    transform 0.01s ", ";\n\n  z-index: ", ";\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n    transition: opacity ", ", transform 0.01s 0s;\n    ", "\n  }\n\n  ", "\n  pointer-events: none;\n\n  ", "\n  & * {\n    pointer-events: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n\n  transition: opacity ", ";\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 0.9;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ---------------------------
var Navigation = function Navigation(_ref) {
  var children = _ref.children,
      menuContent = _ref.menuContent,
      _ref$withOverlay = _ref.withOverlay,
      withOverlay = _ref$withOverlay === void 0 ? true : _ref$withOverlay,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "menuContent", "withOverlay"]);

  return /*#__PURE__*/_react["default"].createElement(_Expandable.Expandable, null, /*#__PURE__*/_react["default"].createElement(_NavigationBar["default"], rest, children), /*#__PURE__*/_react["default"].createElement(NavMenu, {
    withOverlay: withOverlay
  }, menuContent));
}; // ---------------------------


var NavMenu = function NavMenu(_ref2) {
  var children = _ref2.children,
      withOverlay = _ref2.withOverlay;

  var _useContext = (0, _react.useContext)(_Expandable.ExpandableContext),
      isExpanded = _useContext.isExpanded,
      toggleExpanded = _useContext.toggleExpanded;

  var className = isExpanded ? 'isExpanded' : '';
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(NavOverlay, {
    withOverlay: withOverlay,
    onClick: toggleExpanded,
    className: className
  }), /*#__PURE__*/_react["default"].createElement(NavMenuContent, {
    className: className
  }, children));
};

NavMenu.displayName = 'NavMenu'; // ---------------------------

var NavOverlay = (0, _styledComponents["default"])(_Overlay.Overlay)(_templateObject(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.motions.base;
});
NavOverlay.displayName = 'NavOverlay'; // ---------------------------

var NavMenuContent = (0, _styledComponents["default"])(_Box.Box)(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.motions.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.motions.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.zIndices.overlay - 1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.motions.base;
}, ''
/*  */
, ''
/* ignore clicks on container */
, ''
/* but enable clicks on content */
);
NavMenuContent.displayName = 'NavMenuContent'; // ---------------------------

var _default = Navigation;
exports["default"] = _default;