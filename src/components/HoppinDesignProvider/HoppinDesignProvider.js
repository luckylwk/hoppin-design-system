import React from 'react';
import { ThemeProvider } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

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
    color: ${({ theme }) => theme.colors.neutrals.darker};
  }

  * {
    color: inherit;
  }

  @font-face {
    font-family: 'Pluto';
    font-weight: normal;
    font-style: normal;
    src: url('https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot');
    src: url('https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot')
        format('embedded-opentype'),
      url('https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2')
        format('woff2'),
      url('https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff')
        format('woff'),
      url('https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf')
        format('truetype');
  }

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');
`;

const HoppinDesignProvider = ({ children, mode, theme }) => {
  console.log(theme, tokens);
  const themeWithOverrides = {
    ...tokens,
    ...theme,
  };
  return (
    <ThemeProvider theme={themeWithOverrides} mode={mode}>
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
