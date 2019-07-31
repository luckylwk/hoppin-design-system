import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge, get } from 'lodash';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  * {
    /* use border-box model */
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    background: #f8fafb;
    font-size: 16px;
    /* set default text color and family, so inheritance works */
    font-family: ${tokens.fonts.secondary};
    color: ${({ theme }) => theme.colors.neutral.darker};
    text-align: left;
   }

  * {
    color: inherit;
  }

  @font-face {
    font-family: 'Pluto';
    font-weight: normal;
    font-style: normal;
    src: url('//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot');
    src: url('//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot')
        format('embedded-opentype'),
      url('//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2')
        format('woff2'),
      url('//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff')
        format('woff'),
      url('//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf')
        format('truetype');
  }

  @import url('//fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');
`;

const HoppinDesignProvider = ({ children, context, theme }) => {
  // Get theme from the react context.
  // This is used when we use nested HoppinDesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  const themeContext = useContext(ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  const tokensWithOverrides = merge({}, tokens, themeContext, theme);
  // depending on mode, set the primary colors
  const tokensWithContext = merge({}, tokensWithOverrides, {
    colors: get(
      tokensWithOverrides.colors.contexts,
      context,
      tokensWithOverrides.colors
    ),
  });

  return (
    <ThemeProvider theme={tokensWithContext}>
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

HoppinDesignProvider.propTypes = {
  /** defaults to hopper, but can set to host to change all decending elements to pink host style */
  mode: propTypes.oneOf(['hopper', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object,
};

HoppinDesignProvider.defaultProps = {
  mode: 'hopper',
};

export default HoppinDesignProvider;
