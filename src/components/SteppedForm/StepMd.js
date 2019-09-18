import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Markdown } from '../Markdown';

import { ActionButtons, StepHeader } from './index';

const StepMd = ({ title, lede, body, actions, onNavigate, displayMode }) => {
  const containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return (
    <Container
      height="100%"
      width="narrow"
      overflow="scroll"
      {...containerProps}
    >
      <StepHeader title={title} lede={lede} />
      {body && <Markdown>{body}</Markdown>}
      <Box flexGrow={1} />
      <ActionButtons actions={actions} onNavigate={onNavigate} />
    </Container>
  );
};

StepMd.displayName = 'StepMd';

export default StepMd;
