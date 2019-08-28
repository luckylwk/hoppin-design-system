var _templateObject = _taggedTemplateLiteralLoose(['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  @media screen and (max-width: 480px) {\n    html, body {\n      font-size: 14px;\n    }\n  }\n\n  * {\n    color: inherit;\n  }\n\n  @font-face {\n    font-family: \'Pluto\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\');\n    src: url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\')\n        format(\'embedded-opentype\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2\')\n        format(\'woff2\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff\')\n        format(\'woff\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf\')\n        format(\'truetype\');\n  }\n\n  @import url(\'//fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap\');\n'], ['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  @media screen and (max-width: 480px) {\n    html, body {\n      font-size: 14px;\n    }\n  }\n\n  * {\n    color: inherit;\n  }\n\n  @font-face {\n    font-family: \'Pluto\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\');\n    src: url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\')\n        format(\'embedded-opentype\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2\')\n        format(\'woff2\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff\')\n        format(\'woff\'),\n      url(\'//storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf\')\n        format(\'truetype\');\n  }\n\n  @import url(\'//fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap\');\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge, get } from 'lodash';

var GlobalStyle = createGlobalStyle(_templateObject, tokens.fonts.secondary, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
});

var HoppinDesignProvider = function HoppinDesignProvider(_ref2) {
  var children = _ref2.children,
      context = _ref2.context,
      theme = _ref2.theme;

  // Get theme from the react context.
  // This is used when we use nested HoppinDesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  var themeContext = useContext(ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  var tokensWithOverrides = merge({}, tokens, themeContext, theme);
  // depending on context, set the primary colors
  var tokensWithContext = merge({}, tokensWithOverrides, {
    colors: get(tokensWithOverrides.colors.contexts, context, tokensWithOverrides.colors)
  });

  return React.createElement(
    ThemeProvider,
    { theme: tokensWithContext },
    React.createElement(
      React.Fragment,
      null,
      themeContext === undefined && React.createElement(GlobalStyle, null),
      children
    )
  );
};

HoppinDesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** defaults to shadower, but can set to host to change all decending elements to pink host style */
  context: propTypes.oneOf(['shadower', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object
} : {};

HoppinDesignProvider.defaultProps = {
  context: 'shadower'
};

export default HoppinDesignProvider;