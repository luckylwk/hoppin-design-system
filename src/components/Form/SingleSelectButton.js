import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '../Button';

const SingleSelectButton = ({ name, type, options, value, onChange }) => {
  return (
    <Fragment>
      <ButtonGroup>
        {options.map(option => {
          const isSelected = value === option.value;
          return (
            <Button
              context={isSelected ? 'primary' : 'neutral'}
              variant={isSelected ? 'full' : 'outline'}
              onClick={onChange.bind(this, {
                target: { name, type, value: option.value },
              })}
              key={`${type}-${name}-${option.value}`}
            >
              {option.label}
            </Button>
          );
        })}
      </ButtonGroup>
    </Fragment>
  );
};

SingleSelectButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

SingleSelectButton.defaultProps = {
  type: 'single-select-button',
};

SingleSelectButton.displayName = 'SingleSelectButton';

export default SingleSelectButton;
