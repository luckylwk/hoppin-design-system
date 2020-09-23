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

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavToggle } from './Navigation';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { FiMenu, FiX } from 'react-icons/fi';
import { ExpandableContext } from '../Expandable'; // ---------------------------

var MenuToggle = function MenuToggle() {
  return /*#__PURE__*/React.createElement(NavToggle, null, /*#__PURE__*/React.createElement(Button, {
    variant: "subtle"
  }, /*#__PURE__*/React.createElement(FiMenu, null)));
};

MenuToggle.displayName = 'MenuToggle'; // ---------------------------

var MenuButton = styled(Button)(_templateObject());
MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0
};
MenuButton.displayName = 'MenuButton'; // ---------------------------

var MenuSheetWrapper = styled(Flex)(_templateObject2(), function (_ref) {
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

  var _useContext = useContext(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded,
      isExpanded = _useContext.isExpanded;

  var handleLogoClick = function handleLogoClick(e) {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };

  return /*#__PURE__*/React.createElement(MenuSheetWrapper, {
    position: "absolute",
    height: "100%",
    width: ['100%', '85%', '35%'],
    marginRight: ['-100%', '-85%', '-35%'],
    right: 0,
    bg: "neutral.darker",
    padding: "large",
    flexDirection: "column",
    isExpanded: isExpanded
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
    objectFit: "contain",
    onClick: handleLogoClick
  }, /*#__PURE__*/React.createElement(Logo, {
    context: "whiteout"
  })), /*#__PURE__*/React.createElement(NavToggle, null, /*#__PURE__*/React.createElement(Button, {
    variant: "subtle",
    context: "whiteout",
    padding: ['xsmall', null, 'small']
  }, /*#__PURE__*/React.createElement(FiX, null)))), /*#__PURE__*/React.createElement(Flex, _extends({
    flexDirection: "column",
    flexGrow: 2,
    justifyItems: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  }, rest), children));
};

MenuSheet.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Works best with MenuButtons */
  children: PropTypes.any,

  /** Callback for click on Logo, use to link up to your router implementation. */
  onLogoClick: PropTypes.func
} : {};
MenuSheet.displayName = 'MenuSheet';
export { MenuToggle, MenuSheet, MenuButton };