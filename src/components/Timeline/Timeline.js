import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import Step from './Step';

function Timeline({
  steps,
  nextLabel,
  hideStepImageOnDesktop,
  onStepChange,
  ...rest
}) {
  const [activeStep, setActiveStep] = useState(0);

  const goToStep = index => {
    setActiveStep(index);
    onStepChange && onStepChange(steps[index]);
  };
  return (
    <Flex
      width="100%"
      flex="1 0 100%"
      flexDirection="column"
      alignItems="flex-start"
      justifyItems="space-around"
      textAlign="left"
      {...rest}
    >
      {steps.map((step, index) => (
        <Step
          isActive={index === activeStep}
          key={index}
          index={index}
          isLast={index === steps.length - 1}
          goToStep={goToStep}
          nextLabel={nextLabel}
          hideStepImageOnDesktop={hideStepImageOnDesktop}
          {...step}
        />
      ))}
    </Flex>
  );
}

Timeline.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([
        PropTypes.shape({
          mobile: PropTypes.string,
          desktop: PropTypes.string,
        }),
        PropTypes.string,
      ]),
    })
  ),
  nextLabel: PropTypes.string,
};

Timeline.defaultProps = {
  nextLabel: 'Next',
};

Timeline.displayName = 'Timeline';
export default Timeline;
