var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  z-index: ', ';\n\n  background-color: ', ';\n'], ['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  z-index: ', ';\n\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  z-index: ', ';\n\n  ', '\n  pointer-events: none;\n\n  ', '\n  & * {\n    pointer-events: auto;\n  }\n'], ['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  z-index: ', ';\n\n  ', '\n  pointer-events: none;\n\n  ', '\n  & * {\n    pointer-events: auto;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { useContext } from 'react';
import NavigationBar from './NavigationBar';
import { Expandable, ExpandableToggle, ExpandableBody, ExpandableContext } from '../Expandable';
import { Box } from '../Box';
import styled from 'styled-components';
import Color from 'color';

var Navigation = function Navigation(_ref) {
  var children = _ref.children,
      menuContent = _ref.menuContent,
      _ref$withOverlay = _ref.withOverlay,
      withOverlay = _ref$withOverlay === undefined ? true : _ref$withOverlay,
      rest = _objectWithoutProperties(_ref, ['children', 'menuContent', 'withOverlay']);

  return React.createElement(
    Expandable,
    null,
    React.createElement(
      NavigationBar,
      rest,
      children
    ),
    React.createElement(
      NavMenu,
      { withOverlay: withOverlay },
      menuContent
    )
  );
};

var NavMenu = function NavMenu(_ref2) {
  var children = _ref2.children,
      withOverlay = _ref2.withOverlay;

  var _useContext = useContext(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  return React.createElement(
    ExpandableBody,
    null,
    React.createElement(NavOverlay, {
      withOverlay: withOverlay,
      onClick: toggleExpanded
    }),
    React.createElement(
      NavMenuContent,
      null,
      children
    )
  );
};

var NavOverlay = styled(Box)(_templateObject, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndices.overlay - 1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return Color(theme.colors.whiteout.lightest).alpha(0.9).string();
});

var NavMenuContent = styled(Box)(_templateObject2, function (_ref5) {
  var theme = _ref5.theme;
  return theme.zIndices.overlay - 1;
}, '' /* ignore clicks on container */, '' /* but enable clicks on content */);

NavOverlay.displayName = 'NavOverlay';

export default Navigation;
export { ExpandableToggle as NavToggle };