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
`;
MobileImage.displayName = 'MobileImage';

const StepContainer = styled(Flex)`
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  max-width: 36em;
  margin-bottom: ${(props) => (props.isLast ? 0 : props.theme.space[3])};
  margin-left: calc(
    2 * ${(props) => props.theme.space[props.bulletSize]} + 0.75rem
  );

  ${(props) => props.isActive && `flex-grow: 2;`}
  ${(props) => props.isLast && `flex-grow: 0;`}

  /* "track" on which the bullets sit */
  ${(props) =>
    !props.isLast &&
    props.showTrack &&
    `
    &::after {
      content: '';
      position: absolute;
      z-index: ${props.index};
      top: 1.3em;
      margin-left: calc(-${props.theme.space[props.bulletSize]} - 1rem);
      width .5em;
      height: calc(100% + ${props.theme.space[3]});
      background: ${props.theme.colors.white}
      box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);
    }`}
`;
StepContainer.displayName = 'StepContainer';

const StepBullet = styled(Flex)`
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.index + 1};
  top: ${(props) => props.theme.space[3]};
  left: 0;
  margin-top: calc(-${(props) => props.theme.space[props.bulletSize]} + .1rem);
  margin-left: calc(-2 * ${(props) =>
    props.theme.space[props.bulletSize]} - .75rem);
  width: calc(${(props) => props.theme.space[props.bulletSize]} * 2);
  height: calc(${(props) => props.theme.space[props.bulletSize]} * 2);
  border-radius: 50%;
  border: 2px solid ${(props) =>
    props.isActive
      ? props.theme.colors.primary.base
      : props.theme.colors.neutral.light};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => {
    let fontSize;
    switch (props.bulletSize) {
      case 'xlarge':
        fontSize = props.theme.fontSizes.h3;
        break;
      case 'large':
        fontSize = props.theme.fontSizes.h4;
        break;
      default:
        fontSize = props.theme.fontSizes.body;
    }
    return fontSize;
  }}
  background: ${(props) =>
    props.isActive
      ? props.theme.colors.primary.base
      : props.theme.colors.neutral.light};
  box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);

  & span {
    color: ${(props) => props.theme.colors.white};
  }
`;
StepBullet.defaultProps = {
  bullet: '',
};
StepBullet.displayName = 'StepBullet';

const ActiveStepBox = styled(Box)`
  border-radius: 5px;
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: -${(props) => props.theme.space[3]};
  overflow: hidden;
`;
ActiveStepBox.displayName = 'ActiveStepBox';

const StepContent = styled(Box)`
  padding: ${(props) =>
    props.isActive && props.showTrack ? props.theme.space[3] : 0};
`;
StepContent.displayName = 'StepContent';

const StepTitle = styled(Heading)`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary.base : 'inherit'};
  ${(props) =>
    props.isActive &&
    `text-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);`};

  ${(props) => props.isLast && `margin-bottom: 0;`}
`;
StepTitle.displayName = 'StepTitle';

function Step({
  title,
  description,
  image,
  index,
  isActive,
  isLast,
  goToStep,
  nextLabel,
  hideStepImageOnDesktop,
  bullet,
  bulletSize,
  interactive,
  showTrack,
  ...rest
}) {
  const ContentWrapper = isActive && showTrack ? ActiveStepBox : Box;
  return (
    <StepContainer
      index={index}
      isActive={isActive}
      isLast={isLast}
      bulletSize={bulletSize}
      showTrack={showTrack}
      {...rest}
    >
      <StepBullet
        index={index}
        isActive={isActive}
        bulletSize={bulletSize}
        showTrack={showTrack}
      >
        <span>{bullet}</span>
      </StepBullet>
      <ContentWrapper>
        {isActive && image && (
          <MobileImage
            image={image}
            display={[
              'block',
              'block',
              hideStepImageOnDesktop ? 'none' : 'block',
            ]}
          />
        )}
        <StepContent isActive={isActive} showTrack={showTrack}>
          <StepTitle
            as="h3"
            isActive={isActive}
            isLast={isLast}
            onClick={() => interactive && goToStep(index)}
          >
            {title}
          </StepTitle>
          {isActive && (
            <Text
              display="block"
              color={showTrack ? 'neutral.darker' : 'inherit'}
            >
              {description}
            </Text>
          )}
          {interactive && isActive && !isLast && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                goToStep(index + 1);
              }}
              mt={2}
            >
              {nextLabel}
            </Button>
          )}
        </StepContent>
      </ContentWrapper>
      {isActive && <Box flexGrow="2" />}
    </StepContainer>
  );
}

Step.displayName = 'Step';

export default Step;
