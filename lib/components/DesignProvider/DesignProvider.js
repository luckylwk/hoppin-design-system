"use strict";

exports.__esModule = true;
exports["default"] = exports.Fonts = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _tokens = _interopRequireDefault(require("../../tokens"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  html,\n  body,\n  * {\n    /* use border-box model */\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    background: #f8fafb;\n    font-size: 16px;\n    /* set default text color and family, so inheritance works */\n    font-family: ", ";\n    color: ", ";\n    text-align: left;\n   }\n\n  * {\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _tokens["default"].fonts.primary, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
});

var Fonts = function Fonts() {
  return /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap",
    rel: "stylesheet"
  });
};

exports.Fonts = Fonts;

var DesignProvider = function DesignProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme;
  // Get theme from the react context.
  // This is used when we use nested DesignProviders,
  // it will inherit the tokens/theme form it's parent, no need to pass in a new theme, just set the context.
  var themeContext = (0, _react.useContext)(_styledComponents.ThemeContext); // if we specify a theme-override, merge it with the default tokens

  var tokensWithOverrides = (0, _lodash.merge)({}, _tokens["default"], themeContext, theme);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: tokensWithOverrides
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, themeContext === undefined && /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), children));
};

DesignProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** theme is not needed, by  default all the standard tokens get loaded, if extending the theme, set this prop */
  theme: _propTypes["default"].object
} : {};
var _default = DesignProvider;
exports["default"] = _default;