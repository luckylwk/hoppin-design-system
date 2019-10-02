var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { NavToggle } from './Navigation';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { FiMenu, FiX } from 'react-icons/fi';

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

var MenuSheet = function MenuSheet(_ref) {
  var children = _ref.children,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? 'primary' : _ref$context,
      rest = _objectWithoutProperties(_ref, ['children', 'context']);

  return React.createElement(
    Flex,
    {
      width: ['85%', null, '50%'],
      height: '100%',
      bg: context + '.base',
      position: 'absolute',
      right: 0,
      padding: 'large',
      flexDirection: 'column'
    },
    React.createElement(
      Flex,
      null,
      React.createElement(
        Box,
        { objectFit: 'contain' },
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

MenuSheet.displayName = 'MenuSheet';

export { MenuToggle, MenuSheet, MenuButton };