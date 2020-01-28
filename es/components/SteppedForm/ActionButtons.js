import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../Button';
import { Flex } from '../Flex';

var ActionButtons = function ActionButtons(_ref) {
  var actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      _ref$disableNext = _ref.disableNext,
      disableNext = _ref$disableNext === undefined ? false : _ref$disableNext,
      _ref$isSaving = _ref.isSaving,
      isSaving = _ref$isSaving === undefined ? false : _ref$isSaving;

  var handleOnClick = function handleOnClick(action, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    if (action.navigate === 'external') {
      return window.open(action.url, action.target || '_blank');
    } else {
      return onNavigate(action);
    }
  };

  return React.createElement(
    Flex,
    { marginY: 'base', flexGrow: 0, justifyContent: 'space-between' },
    actions && actions.map(function (action, index) {
      if (action.navigate === 'back' || typeof action.label === 'string' && action.label.toLowerCase() === 'back') {
        return React.createElement(
          Button,
          {
            key: 'back',
            type: 'button',
            variant: action.variant ? action.variant : 'outline',
            icon: true,
            size: 'large',
            onClick: handleOnClick.bind(null, action),
            order: -1,
            alignSelf: 'flex-start',
            marginRight: 'auto',
            disabled: isSaving
          },
          React.createElement(FiArrowLeft, { alt: action.label })
        );
      }

      return React.createElement(
        Button,
        {
          key: index,
          type: action.navigate === 'next' ? 'submit' : 'button',
          variant: action.variant ? action.variant : action.navigate === 'next' ? 'full' : 'outline',
          size: 'large',
          marginLeft: 'small',
          onClick: handleOnClick.bind(null, action),
          disabled: action.navigate === 'next' && disableNext || isSaving
        },
        action.label
      );
    })
  );
};

ActionButtons.displayName = 'ActionButtons';

export default ActionButtons;