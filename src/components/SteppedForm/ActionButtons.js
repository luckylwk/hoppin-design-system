import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../Button';
import { Flex } from '../Flex';

const ActionButtons = ({
  actions,
  onNavigate,
  disableNext = false,
  isSaving = false,
}) => {
  const handleOnClick = (action, event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (action.navigate === 'external') {
      return window.open(action.url, action.target || '_blank');
    } else {
      return onNavigate(action);
    }
  };

  return (
    <Flex marginY="base" flexGrow={0} justifyContent="space-between">
      {actions &&
        actions.map((action, index) => {
          if (
            action.navigate === 'back' ||
            (typeof action.label === 'string' &&
              action.label.toLowerCase() === 'back')
          ) {
            return (
              <Button
                key="back"
                type="button"
                variant={action.variant ? action.variant : 'outline'}
                icon={true}
                onClick={handleOnClick.bind(null, action)}
                order={-1}
                alignSelf="flex-start"
                marginRight="auto"
                disabled={isSaving}
              >
                <FiArrowLeft alt={action.label} />
              </Button>
            );
          }

          return (
            <Button
              key={index}
              type={action.navigate === 'next' ? 'submit' : 'button'}
              variant={
                action.variant
                  ? action.variant
                  : action.navigate === 'next'
                  ? 'full'
                  : 'outline'
              }
              marginLeft="small"
              onClick={handleOnClick.bind(null, action)}
              disabled={(action.navigate === 'next' && disableNext) || isSaving}
            >
              {action.label}
            </Button>
          );
        })}
    </Flex>
  );
};

ActionButtons.displayName = 'ActionButtons';

export default ActionButtons;
