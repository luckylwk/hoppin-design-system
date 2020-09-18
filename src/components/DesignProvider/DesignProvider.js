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
    font-family: ${tokens.fonts.primary};
    color: ${({ theme }) => theme.colors.neutral.darker};
    text-align: left;
   }

  * {
    color: inherit;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap');
`;

const DesignProvider = ({ children, context, theme }) => {
  // Get theme from the react context.
  // This is used when we use nested DesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  const themeContext = useContext(ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  const tokensWithOverrides = merge({}, tokens, themeContext, theme);
  // depending on context, set the primary colors, logo and icon
  const tokensWithContext = merge({}, tokensWithOverrides, {
    colors: get(
      tokensWithOverrides.colors.contexts,
      context,
      tokensWithOverrides.colors
    ),
    logo: {
      default: get(
        tokensWithOverrides.logo,
        context,
        tokensWithOverrides.logo.primary
      ),
    },
    icon: {
      default: get(
        tokensWithOverrides.icon,
        context,
        tokensWithOverrides.icon.primary
      ),
    },
  });

  return (
    <ThemeProvider theme={tokensWithContext}>
      <React.Fragment>
        {themeContext === undefined && <GlobalStyle />}
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

DesignProvider.propTypes = {
  /** defaults to shadower, but can set to host to change all decending elements to pink host style */
  context: propTypes.oneOf(['shadower', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object,
};

DesignProvider.defaultProps = {
  context: 'shadower',
};

export default DesignProvider;
