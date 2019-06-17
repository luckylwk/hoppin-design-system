import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Heading } from '../Heading';
import Step from './Step';
import styled from 'styled-components';

const DesktopImage = styled(Box)`
  /*
    Uncomment below to hide large background image on mobile.
    Also remove both references to filter: blur()
  */
  /* display: none; */
  filter: blur(8px);

  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: 0;
  background-image: url(${({ image }) =>
    image.desktop && image.mobile
      ? image.mobile // we have separate desktop and mobile images, start with mobile
      : image}); /* there's only one image URL */
  background-size: cover;
  background-position: center center;
  box-shadow: inset 50em 0 25em -25em hsla(0, 0%, 0%, 0.3);

  /* Add responsive media query to load desktop size image if we have it */
  ${({ image }) => {
    if (image.desktop) {
      return `@media (min-width: 832px) {
          display: block;
          background-image: url(${image.desktop});
          filter: none;
        }`;
    }
  }}
`;

const TimelineWrapper = styled(Flex)`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;
TimelineWrapper.defaultProps = {
  p: 3,
  bg: 'grey_light',
  minHeight: 500,
  display: 'flex',
};

function Timeline({ steps, nextLabel, title, subtitle, ...rest }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <TimelineWrapper {...rest}>
      <DesktopImage image={steps[activeStep].image} />
      <Flex
        contain
        width="100%"
        flex="1 0 100%"
        flexDirection="column"
        alignItems="flex-start"
        justift-items="space-around"
      >
        {title && (
          <Box style={{ zIndex: 2 }} mt={3}>
            <Heading as="h2" color="white">
              {title}
            </Heading>
            {subtitle && (
              <Heading as="h5" color="white">
                {subtitle}
              </Heading>
            )}
          </Box>
        )}
        {steps.map((step, index) => (
          <Step
            isActive={index === activeStep}
            key={index}
            index={index}
            isLast={index === steps.length - 1}
            setActiveStep={setActiveStep}
            nextLabel={nextLabel}
            {...step}
          />
        ))}
      </Flex>
    </TimelineWrapper>
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

export default Timeline;
