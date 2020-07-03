import styled from 'styled-components';
import { space, color, get } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { Heading } from '../Heading';

const Tag = styled('span')`
  display: inline-block;
  ${space}
  ${color}
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.label};
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '';
    background-color: ${props =>
      get(props, `theme.colors.${props.color}`, '#ddd')};
    width: 4px;
    height: 4px;
    border-radius: 2px;
    vertical-align: middle;
    -webkit-transform: translateY(-.1rem);
    transform: translateY(-.1rem);
    display: inline-block;
    margin: 0 .5rem;
  }

  &:first-of-type::before {
    display: none;
  }

  & + ${Heading} {
    margin-top: 0;
  }
`;

Tag.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
};

Tag.defaultProps = {
  color: 'neutral.light',
  marginTop: 'small',
  marginBottom: 0,
};

Tag.displayName = 'Tag';
export default Tag;
