var _this = this;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '../Button';

var SingleSelectButton = function SingleSelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;

  return React.createElement(
    Fragment,
    null,
    React.createElement(
      ButtonGroup,
      null,
      options.map(function (option) {
        var isSelected = value === option.value;
        return React.createElement(
          Button,
          {
            context: isSelected ? 'primary' : 'neutral',
            variant: isSelected ? 'full' : 'outline',
            onClick: onChange.bind(_this, {
              target: { name: name, type: type, value: option.value }
            }),
            key: type + '-' + name + '-' + option.value
          },
          option.label
        );
      })
    )
  );
};

SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
} : {};

SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};

SingleSelectButton.displayName = 'SingleSelectButton';

export default SingleSelectButton;