import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const getBgColor = ({ theme, context }) =>
  context === 'whiteout'
    ? theme.colors[context].lighter
    : theme.colors[context].darker;

const getTextColor = ({ theme, context }) =>
  context === 'whiteout'
    ? theme.colors.neutral.darker
    : theme.colors.whiteout.lightest;

const Tooltip = styled(ReactTooltip)`
  &.__react_component_tooltip.hoppin-context.type-dark {
    border-radius: ${({ theme }) => theme.radii.small};
    font-size: ${({ theme }) => theme.fontSizes.label};
    z-index: ${({ theme }) => theme.zIndices.overlay};
    box-shadow: ${({ theme }) => theme.shadows.small};

    .show {
      opacity: 0.95;
      margin-top: 0px;
      margin-left: 0px;
      visibility: visible;
    }

    color: ${getTextColor};
    background-color: ${getBgColor};

    &.place-top:after {
      border-top-color: ${getBgColor};
      border-top-style: solid;
      border-top-width: 6px;
    }
    &.place-bottom:after {
      border-bottom-color: ${getBgColor};
      border-bottom-style: solid;
      border-bottom-width: 6px;
    }
    &.place-left:after {
      border-left-color: ${getBgColor};
      border-left-style: solid;
      border-left-width: 6px;
    }
    &.place-right:after {
      border-right-color: ${getBgColor};
      border-right-style: solid;
      border-right-width: 6px;
    }
    &.border {
      border: 1px solid ${getBgColor};
    }
    &.border.place-top:before {
      border-top: 8px solid ${getBgColor};
    }
    &.border.place-bottom:before {
      border-bottom: 8px solid ${getBgColor};
    }
    &.border.place-left:before {
      border-left: 8px solid ${getBgColor};
    }
    &.border.place-right:before {
      border-right: 8px solid ${getBgColor};
    }
  }
`;

Tooltip.propTypes = {
  context: PropTypes.oneOf([
    'primary',
    'shadower',
    'host',
    'neutral',
    'danger',
    'whiteout',
  ]),
  effect: PropTypes.oneOf(['float', 'solid']),
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

Tooltip.defaultProps = {
  context: 'neutral',
  className: 'hoppin-context',
  effect: 'float',
  place: 'top',
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
