var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';

var LogoResponsive = function LogoResponsive(_ref) {
  var context = _ref.context,
      rest = _objectWithoutProperties(_ref, ['context']);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Logo, _extends({
      size: 'logo',
      context: context
    }, rest, {
      display: ['none', null, 'block']
    })),
    React.createElement(Logo, _extends({
      size: 'icon',
      context: context,
      maxHeight: '1.25rem'
    }, rest, {
      display: ['block', null, 'none']
    }))
  );
};

LogoResponsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** inherits context from design provider, override if needed */
  context: PropTypes.oneOf(['primary', 'shadower', 'host'])
} : {};
LogoResponsive.defaultProps = {
  context: 'primary'
};

LogoResponsive.displayName = 'LogoResponsive';

export default LogoResponsive;