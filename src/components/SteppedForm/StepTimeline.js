import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Timeline } from '../Timeline';

import { ActionButtons, StepHeader } from './index';

const StepTimeline = ({
  title,
  lede,
  steps,
  options,
  actions,
  onNavigate,
  displayMode,
}) => {
  const containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return (
    <Container
      height="100%"
      width="narrow"
      overflow="scroll"
      {...containerProps}
    >
      <StepHeader title={title} lede={lede} />
      <Timeline steps={steps} flexGrow={1} {...options} />
      <Box flexGrow={2} />
      <ActionButtons actions={actions} onNavigate={onNavigate} />
    </Container>
  );
};

StepTimeline.displayName = 'StepTimeline';
export default StepTimeline;
