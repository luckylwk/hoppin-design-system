function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ", ";\n    color: ", ";\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge } from 'lodash';
var GlobalStyle = createGlobalStyle(_templateObject(), tokens.fonts.primary, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
});
export var Fonts = function Fonts() {
  return /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap",
    rel: "stylesheet"
  });
};

var DesignProvider = function DesignProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme;
  // Get theme from the react context.
  // This is used when we use nested DesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  var themeContext = useContext(ThemeContext); // if we specify a theme-override, merge it with the default tokens

  var tokensWithOverrides = merge({}, tokens, themeContext, theme);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: tokensWithOverrides
  }, /*#__PURE__*/React.createElement(React.Fragment, null, themeContext === undefined && /*#__PURE__*/React.createElement(GlobalStyle, null), children));
};

DesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object
} : {};
export default DesignProvider;