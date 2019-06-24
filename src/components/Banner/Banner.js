import React from 'react';
import { Flex } from '../Flex';
import { Container } from '../Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Banner = styled(Flex)`
  ${props => {
    // switch shadow direction depending on shadow prop.
    let shadowCSS;
    switch (props.shadow) {
      case 'top':
        shadowCSS = 'linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0))';
        break;
      case 'right':
        shadowCSS = 'linear-gradient(to left,rgba(0,0,0,0.45),rgba(0,0,0,0))';
        break;
      case 'left':
        shadowCSS = 'linear-gradient(to right,rgba(0,0,0,0.45),rgba(0,0,0,0))';
        break;
      case 'none':
        shadowCSS = '';
        break;
      case 'bottom':
      default:
        shadowCSS = 'linear-gradient(to top,rgba(0,0,0,0.45),rgba(0,0,0,0))';
        break;
    }

    return `background-image: ${shadowCSS ? `${shadowCSS}, ` : ''} url(${
      props.backgroundImage
    });`;
  }}

  background-position: ${props => props.backgroundPosition};
  background-size: ${props => props.backgroundSize};
  background-repeat: ${props => props.backgroundRepeat};

  & > ${Container} {
    color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    text-align: center;
  }
`;

Banner.propTypes = {
  ...Flex.propTypes,
  /** Background image props, map to their CSS counterparts */
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  /** Shadow direction. Start from `left`, `bottom`,... or `none` */
  shadow: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'none']),
};

Banner.defaultProps = {
  display: 'flex',
  height: '85vh',
  flexDirection: 'column',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

Banner.displayName = 'Banner';
export default Banner;
