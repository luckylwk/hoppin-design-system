var _this = this;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Paragraph, ButtonGroup, Button } from 'hoppin-design-system';

// TODO: Single select only!
var SelectButton = function SelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      title = _ref.title,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;

  return React.createElement(
    Fragment,
    null,
    title && React.createElement(
      Paragraph,
      null,
      title
    ),
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

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
} : {};

SelectButton.defaultProps = {
  type: 'select-button'
};

SelectButton.displayName = 'SelectButton';

export default SelectButton;