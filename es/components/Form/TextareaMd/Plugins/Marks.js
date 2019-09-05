var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Text } from '../../../Text';

var renderMark = function renderMark(_ref, _, next) {
  var children = _ref.children,
      mark = _ref.mark,
      attributes = _ref.attributes;

  switch (mark.type) {
    case 'strong': // TODO: only one mark
    case 'bold':
      return React.createElement(
        Text,
        _extends({ fontWeight: 'bold' }, attributes),
        children
      );

    case 'code':
      return React.createElement(
        'code',
        attributes,
        children
      );

    case 'emphasis': // TODO: only one mark
    case 'italic':
      return React.createElement(
        Text,
        _extends({ fontStyle: 'italic' }, attributes),
        children
      );

    default:
      return next();
  }
};

export default { renderMark: renderMark };