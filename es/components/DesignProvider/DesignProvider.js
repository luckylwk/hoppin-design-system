function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: ", ";\n\n    /** Set default text color and family, so inheritance works */\n    font-size: 16px;\n    font-family: ", ";\n    color: ", ";\n\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n\n  @font-face {\n    font-family: 'Surt';\n    src: url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-light-webfont.woff2') format('woff2'),\n      url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-light-webfont.woff') format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Surt';\n    src: url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-lightoblique-webfont.woff2') format('woff2'),\n      url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-lightoblique-webfont.woff') format('woff');\n    font-weight: 300;\n    font-style: italic;\n  }\n\n  @font-face {\n    font-family: 'Surt';\n    src: url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-semibold-webfont.woff2') format('woff2'),\n      url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-semibold-webfont.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Surt';\n    src: url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-semiboldoblique-webfont.woff2') format('woff2'),\n      url('https://storage.googleapis.com/orbiit-assets/fonts/surt/surt-semiboldoblique-webfont.woff') format('woff');\n    font-weight: 500;\n    font-style: italic;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { merge } from 'lodash';
import tokens from '../../tokens';
var GlobalStyle = createGlobalStyle(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.whiteout.lightest;
}, tokens.fonts.primary, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral.darker;
}); // export const Fonts = () => (
//   <link
//     href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap"
//     rel="stylesheet"
//   />
// );

var DesignProvider = function DesignProvider(_ref3) {
  var children = _ref3.children,
      theme = _ref3.theme;
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