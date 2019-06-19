var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n  }\n\n  * {\n    color: inherit;\n  }\n\n  @font-face {\n    font-family: \'Pluto\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\');\n    src: url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\')\n        format(\'embedded-opentype\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2\')\n        format(\'woff2\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff\')\n        format(\'woff\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf\')\n        format(\'truetype\');\n  }\n\n  @import url(\'https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap\');\n'], ['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n  }\n\n  * {\n    color: inherit;\n  }\n\n  @font-face {\n    font-family: \'Pluto\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\');\n    src: url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.eot\')\n        format(\'embedded-opentype\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff2\')\n        format(\'woff2\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.woff\')\n        format(\'woff\'),\n      url(\'https://storage.googleapis.com/hoppin-platform/fonts/pluto/pluto-regular.ttf\')\n        format(\'truetype\');\n  }\n\n  @import url(\'https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i&display=swap\');\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { ThemeProvider } from 'styled-components';
import tokens from '../../tokens';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

var GlobalStyle = createGlobalStyle(_templateObject, tokens.fonts.secondary, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutrals.darker;
});

var HoppinDesignProvider = function HoppinDesignProvider(_ref2) {
  var children = _ref2.children,
      mode = _ref2.mode,
      theme = _ref2.theme;

  console.log(theme, tokens);
  var themeWithOverrides = _extends({}, tokens, theme);
  return React.createElement(
    ThemeProvider,
    { theme: themeWithOverrides, mode: mode },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(GlobalStyle, null),
      children
    )
  );
};

HoppinDesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** defaults to hopper, but can set to host to change all decending elements to pink host style */
  mode: propTypes.oneOf(['hopper', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: propTypes.object
} : {};

HoppinDesignProvider.defaultProps = {
  mode: 'hopper'
};

export default HoppinDesignProvider;