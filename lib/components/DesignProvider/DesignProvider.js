'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n\n  @import url(\'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap\');\n'], ['\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ', ';\n    color: ', ';\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n\n  @import url(\'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap\');\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _tokens = require('../../tokens');

var _tokens2 = _interopRequireDefault(_tokens);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject, _tokens2.default.fonts.primary, function (_ref) {
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
  var themeContext = (0, _react.useContext)(_styledComponents.ThemeContext);
  // if we specify a theme-override, merge it with the default tokens
  var tokensWithOverrides = (0, _lodash.merge)({}, _tokens2.default, themeContext, theme);
  // depending on context, set the primary colors, logo and icon
  var tokensWithContext = (0, _lodash.merge)({}, tokensWithOverrides, {
    colors: (0, _lodash.get)(tokensWithOverrides.colors.contexts, context, tokensWithOverrides.colors),
    logo: {
      default: (0, _lodash.get)(tokensWithOverrides.logo, context, tokensWithOverrides.logo.primary)
    },
    icon: {
      default: (0, _lodash.get)(tokensWithOverrides.icon, context, tokensWithOverrides.icon.primary)
    }
  });

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: tokensWithContext },
    _react2.default.createElement(
      _react2.default.Fragment,
      null,
      themeContext === undefined && _react2.default.createElement(GlobalStyle, null),
      children
    )
  );
};

DesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** defaults to shadower, but can set to host to change all decending elements to pink host style */
  context: _propTypes2.default.oneOf(['shadower', 'host']),
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: _propTypes2.default.object
} : {};

DesignProvider.defaultProps = {
  context: 'shadower'
};

exports.default = DesignProvider;
module.exports = exports['default'];