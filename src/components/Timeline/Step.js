import React from 'react';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Button } from '../Button';
import styled from 'styled-components';

const MobileImage = styled(Box)`
  display: block;
  width: 100%;
  height: 8em;
  background-image: url(${({ image }) =>
    image.desktop && image.mobile
      ? image.mobile // we have separate desktop and mobile images, start with mobile
      : image}); /* there's only one image URL */
  background-size: cover;
  background-position: center center;

  /* Add responsive media query to load desktop size image if we have it */
  @media (min-width: 832px) {
    display: none;
  }
`;

const StepContainer = styled(Flex)`
  position: relative;
  margin-left: 2.5em;
  padding: ${props => (props.isActive ? 0 : props.theme.space[2])};
  flex-grow: 1;
  flex-direction: column;
  max-width: 36em;

  ${props => props.isActive && `flex-grow: 2;`}
  ${props => props.isLast && `flex-grow: 0;`}

  &::before {
    content: '';
    position: absolute;
    z-index: ${props => props.index + 1};
    top: ${props => props.theme.space[2]};
    left: 0;
    margin-top: 0.2em;
    margin-left: -2.3em;
    width 1.1em;
    height: 1.1em;
    border-radius: 50%;
    border: 2px solid ${props =>
      props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.grey_light}
    background: ${props => props.theme.colors.white}
    box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);
  }

  ${props =>
    !props.isLast &&
    `
    &::after {
      content: '';
      position: absolute;
      z-index: ${props.index};
      top: 1.3em;
      left: -1.87em;
      width .5em;
      height: 100%;
      background: ${props.theme.colors.white}
      box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);
    }`}
`;

const ActiveStepBox = styled(Box)`
  border-radius: 5px;
  border-top: 4px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.05);
`;

const StepContent = styled(Box)`
  padding: ${props => (props.isActive ? props.theme.space[2] : 0)};
`;

const StepTitle = styled(Heading)`
  color: ${props => props.theme.colors.white}
    ${props =>
      props.isActive &&
      `
  color: ${props.theme.colors.primary};
  text-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);
  `};

  ${props => props.isLast && `margin-bottom: 0;`}
`;

function Step({
  title,
  description,
  image,
  index,
  isActive,
  isLast,
  setActiveStep,
  nextLabel,
}) {
  const ContentWrapper = isActive ? ActiveStepBox : Box;
  return (
    <StepContainer index={index} isActive={isActive} isLast={isLast}>
      <ContentWrapper>
        {isActive && <MobileImage image={image} />}
        <StepContent isActive={isActive}>
          <StepTitle
            as="h3"
            isActive={isActive}
            isLast={isLast}
            onClick={e => setActiveStep(index)}
          >
            {title}
          </StepTitle>
          {isActive && <Text display="block">{description}</Text>}
          {isActive && !isLast && (
            <Button onClick={e => setActiveStep(index + 1)} mt={2}>
              {nextLabel}
            </Button>
          )}
        </StepContent>
      </ContentWrapper>
      {isActive && <Box flexGrow="2" />}
    </StepContainer>
  );
}

export default Step;
