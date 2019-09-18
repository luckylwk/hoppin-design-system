import React, { Fragment } from 'react';

import { Heading } from '../Heading';
import { Lede } from '../Lede';
import { Markdown } from '../Markdown';

const StepHeader = ({ title, lede }) => {
  return (
    <Fragment>
      {title && title.length > 0 && (
        <Heading paddingTop={[1, 1, 4]} paddingBottom={[0, 0, 2]}>
          {title}
        </Heading>
      )}
      {lede && lede.length > 0 && (
        <Lede as="div">
          <Markdown>{lede}</Markdown>
        </Lede>
      )}
    </Fragment>
  );
};

StepHeader.displayName = 'StepHeader';

export default StepHeader;
