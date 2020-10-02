import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  textAlign,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

import OrderedList from './OrderedList';
import UnorderedList from './UnorderedList';

import { FiCircle, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const ListItemWrapper = styled('li')`
  font-size: ${({ theme }) => theme.fontSizes.body || '1em'};
  font-family: ${({ theme }) => theme.fonts.secondary || 'sans-serif'};
  line-height: ${({ theme }) => theme.lineHeights.body || '1.4em'};
  ${textAlign}
  ${space}
  ${color}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}

  position: relative;
  padding-left: ${({ theme }) => theme.space.base};

  ${UnorderedList} & svg {
    color: ${({ variant, theme }) =>
      variant === 'unchecked'
        ? theme.colors.neutral.light
        : theme.colors.primary.base};

    position: absolute;
    top: 0.2em;
    left: -${({ theme }) => theme.space.base};
    width: 1em;
    height: 1em;
  }

  ${OrderedList} & svg {
    display: none;
  }

  ${OrderedList} &:before {
    counter-increment: list;
    content: counter(list);
    position: absolute;
    top: 0;
    left: -${({ theme }) => theme.space.base};
    color: ${({ theme }) => theme.colors.primary.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

ListItemWrapper.propTypes = {
  ...systemPropTypes.space,
  ...systemPropTypes.position,
  ...systemPropTypes.color,
  ...systemPropTypes.textAlign,
  ...systemPropTypes.flex,
  ...systemPropTypes.flexGrow,
  ...systemPropTypes.flexShrink,
  ...systemPropTypes.flexBasis,
  ...systemPropTypes.justifySelf,
  ...systemPropTypes.alignSelf,
  ...systemPropTypes.order,
  variant: propTypes.oneOf(['bullet', 'checked', 'unchecked']),
};

ListItemWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  variant: 'bullet',
};

ListItemWrapper.displayName = 'ListItemWrapper';

const ListItem = ({ variant, children, ...rest }) => {
  const Bullet =
    variant === 'unchecked'
      ? FiCircle
      : variant === 'checked'
      ? FiCheckCircle
      : FiChevronRight;
  return (
    <ListItemWrapper variant={variant} {...rest}>
      <Bullet /> {children}
    </ListItemWrapper>
  );
};
ListItem.displayName = 'ListItem';

export default ListItem;
