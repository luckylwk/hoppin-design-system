import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkUnstyled from './LinkUnstyled';

// Logic from https://bit.dev/grommet/grommet/routed-button/~code#components/RoutedButton/RoutedButton.js

class RoutedLinkUnstyled extends Component {
  static contextTypes = {
    router: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    method: 'push',
  };

  onClick = (event, ...args) => {
    const { method, onClick, to } = this.props;
    const { router } = this.context;
    if (event) {
      const modifierKey = event.ctrlKey || event.metaKey;

      // if the user right-clicked in the button we should let it go
      if (modifierKey) {
        return;
      }
    }
    if (router) {
      event.preventDefault();
      (router.history || router)[method](to);
    }
    if (onClick) {
      onClick(event, ...args);
    }
  };

  render() {
    const { href, to, method, onClick, ...rest } = this.props;
    return (
      <LinkUnstyled
        {...rest}
        href={to || href}
        disabled={!to && !onClick}
        onClick={this.onClick}
      />
    );
  }
}

export default RoutedLinkUnstyled;
