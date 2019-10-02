import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const LogoResponsive = ({ context, ...rest }) => {
  return (
    <React.Fragment>
      <Logo
        size="logo"
        context={context}
        {...rest}
        display={['none', null, 'block']}
      />
      <Logo
        size="icon"
        context={context}
        maxHeight="1.25rem"
        {...rest}
        display={['block', null, 'none']}
      />
    </React.Fragment>
  );
};

LogoResponsive.propTypes = {
  /** inherits context from design provider, override if needed */
  context: PropTypes.oneOf(['primary', 'shadower', 'host']),
};
LogoResponsive.defaultProps = {
  context: 'primary',
};

LogoResponsive.displayName = 'LogoResponsive';

export default LogoResponsive;
