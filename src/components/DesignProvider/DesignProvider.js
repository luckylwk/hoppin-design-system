import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge } from 'lodash';

import tokens from '../../tokens';

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
    background: ${({ theme }) => theme.colors.whiteout.lightest};

    /** Set default text color and family, so inheritance works */
    font-size: 16px;
    font-family: ${tokens.fonts.primary};
    color: ${({ theme }) => theme.colors.neutral.darker};

    text-align: left;
   }

  * {
    color: inherit;
  }
`;

export const Fonts = () => (
  <link
    href="https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-cdn.css"
    rel="stylesheet"
  />
);

const DesignProvider = ({ children, theme }) => {
  // Get theme from the react context.
  // This is used when we use nested DesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  const themeContext = useContext(ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  const tokensWithOverrides = merge({}, tokens, themeContext, theme);

  return (
    <ThemeProvider theme={tokensWithOverrides}>
      <React.Fragment>
        {themeContext === undefined && <GlobalStyle />}
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

DesignProvider.propTypes = {
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object,
};

export default DesignProvider;
