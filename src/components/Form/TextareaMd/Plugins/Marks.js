import React from 'react';

import { Text } from '../../../Text';

const renderMark = ({ children, mark, attributes }, _, next) => {
  switch (mark.type) {
    case 'strong': // TODO: only one mark
    case 'bold':
      return (
        <Text fontWeight="bold" {...attributes}>
          {children}
        </Text>
      );

    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'emphasis': // TODO: only one mark
    case 'italic':
      return (
        <Text fontStyle="italic" {...attributes}>
          {children}
        </Text>
      );

    default:
      return next();
  }
};

export default { renderMark };
