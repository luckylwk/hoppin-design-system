var _templateObject = _taggedTemplateLiteralLoose(['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n\n  @import url(\'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap\');\n'], ['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n\n  @import url(\'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap\');\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge, get } from 'lodash';

var GlobalStyle = createGlobalStyle(_templateObject, tokens.fonts.primary, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
});

var DesignProvider = function DesignProvider(_ref2) {
  var children = _ref2.children,
      context = _ref2.context,
      theme = _ref2.theme;

  // Get theme from the react context.
  // This is used when we use nested DesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  var themeContext = useContext(ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  var tokensWithOverrides = merge({}, tokens, themeContext, theme);
  // depending on context, set the primary colors, logo and icon
  var tokensWithContext = merge({}, tokensWithOverrides, {
    colors: get(tokensWithOverrides.colors.contexts, context, tokensWithOverrides.colors),
    logo: {
      default: get(tokensWithOverrides.logo, context, tokensWithOverrides.logo.primary)
    },
    icon: {
      default: get(tokensWithOverrides.icon, context, tokensWithOverrides.icon.primary)
    }
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

DesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** defaults to shadower, but can set to host to change all decending elements to pink host style */
  context: propTypes.oneOf(['shadower', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object
} : {};

DesignProvider.defaultProps = {
  context: 'shadower'
};

export default DesignProvider;