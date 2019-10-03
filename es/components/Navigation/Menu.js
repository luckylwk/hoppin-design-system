var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose([''], ['']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  transition: margin-right 0.5s;\n\n  ', '\n'], ['\n  transition: margin-right 0.5s;\n\n  ', '\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavToggle } from './Navigation';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { FiMenu, FiX } from 'react-icons/fi';
import { ExpandableContext } from '../Expandable';

var MenuToggle = function MenuToggle() {
  return React.createElement(
    NavToggle,
    null,
    React.createElement(
      Button,
      { variant: 'subtle' },
      React.createElement(FiMenu, null)
    )
  );
};

MenuToggle.displayName = 'MenuToggle';

var MenuButton = styled(Button)(_templateObject);
MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0
};

var MenuSheetWrapper = styled(Flex)(_templateObject2, function (_ref) {
  var isExpanded = _ref.isExpanded;
  return isExpanded ? 'margin-right: 0' : '';
});

var MenuSheet = function MenuSheet(_ref2) {
  var children = _ref2.children,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? 'primary' : _ref2$context,
      _ref2$onLogoClick = _ref2.onLogoClick,
      onLogoClick = _ref2$onLogoClick === undefined ? function () {} : _ref2$onLogoClick,
      rest = _objectWithoutProperties(_ref2, ['children', 'context', 'onLogoClick']);

  var _useContext = useContext(ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded,
      isExpanded = _useContext.isExpanded;

  var handleLogoClick = function handleLogoClick(e) {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };

  return React.createElement(
    MenuSheetWrapper,
    {
      width: ['85%', null, '50%'],
      marginRight: ['-85%', null, '-50%'],
      height: '100%',
      bg: context + '.base',
      position: 'absolute',
      right: 0,
      padding: 'large',
      flexDirection: 'column',
      isExpanded: isExpanded
    },
    React.createElement(
      Flex,
      null,
      React.createElement(
        Box,
        { objectFit: 'contain', onClick: handleLogoClick },
        React.createElement(Logo, { context: 'whiteout' })
      ),
      React.createElement(
        NavToggle,
        null,
        React.createElement(
          Button,
          {
            variant: 'subtle',
            context: 'whiteout',
            padding: ['xsmall', null, 'small']
          },
          React.createElement(FiX, null)
        )
      )
    ),
    React.createElement(
      Flex,
      _extends({
        flexDirection: 'column',
        flexGrow: 2,
        justifyItems: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }, rest),
      children
    )
  );
};

MenuSheet.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Works best with MenuButtons */
  children: PropTypes.any,
  /** Callback for click on Logo, use to link up to your router implementation. */
  onLogoClick: PropTypes.func
} : {};
MenuSheet.displayName = 'MenuSheet';

export { MenuToggle, MenuSheet, MenuButton };