import React, { Fragment } from 'react';

import { Heading } from '../Heading';
import { Lede } from '../Lede';
import { Markdown } from '../Markdown';

var StepHeader = function StepHeader(_ref) {
  var title = _ref.title,
      lede = _ref.lede;

  return React.createElement(
    Fragment,
    null,
    title && title.length > 0 && React.createElement(
      Heading,
      { paddingTop: [1, 1, 4], paddingBottom: [0, 0, 2] },
      title
    ),
    lede && lede.length > 0 && React.createElement(
      Lede,
      { as: 'div' },
      React.createElement(
        Markdown,
        null,
        lede
      )
    )
  );
};

StepHeader.displayName = 'StepHeader';

export default StepHeader;