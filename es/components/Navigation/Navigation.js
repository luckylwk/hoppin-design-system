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

import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import { Expandable, ExpandableToggle, ExpandableContext } from '../Expandable';
import { Box } from '../Box';
import { Overlay } from '../Overlay'; // ---------------------------

var Navigation = function Navigation(_ref) {
  var children = _ref.children,
      menuContent = _ref.menuContent,
      _ref$withOverlay = _ref.withOverlay,
      withOverlay = _ref$withOverlay === void 0 ? true : _ref$withOverlay,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "menuContent", "withOverlay"]);

  return /*#__PURE__*/React.createElement(Expandable, null, /*#__PURE__*/React.createElement(NavigationBar, rest, children), /*#__PURE__*/React.createElement(NavMenu, {
    withOverlay: withOverlay
  }, menuContent));
}; // ---------------------------


var NavMenu = function NavMenu(_ref2) {
  var children = _ref2.children,
      withOverlay = _ref2.withOverlay;

  var _useContext = useContext(ExpandableContext),
      isExpanded = _useContext.isExpanded,
      toggleExpanded = _useContext.toggleExpanded;

  var className = isExpanded ? 'isExpanded' : '';
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(NavOverlay, {
    withOverlay: withOverlay,
    onClick: toggleExpanded,
    className: className
  }), /*#__PURE__*/React.createElement(NavMenuContent, {
    className: className
  }, children));
};

NavMenu.displayName = 'NavMenu'; // ---------------------------

var NavOverlay = styled(Overlay)(_templateObject(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.motions.base;
});
NavOverlay.displayName = 'NavOverlay'; // ---------------------------

var NavMenuContent = styled(Box)(_templateObject2(), function (_ref4) {
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

export default Navigation;
export { ExpandableToggle as NavToggle };