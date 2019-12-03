'use strict';

exports.__esModule = true;
exports.NavToggle = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  z-index: ', ';\n\n  background-color: ', ';\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n'], ['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  z-index: ', ';\n\n  background-color: ', ';\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n  transform: translate3d(100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s, transform 0.01s 0.5s;\n\n  z-index: ', ';\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n    transition: opacity 0.5s, transform 0.01s 0s;\n    ', '\n  }\n\n  ', '\n  pointer-events: none;\n\n  ', '\n  & * {\n    pointer-events: auto;\n  }\n'], ['\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  height: 100vh;\n  width: 100vw;\n  transform: translate3d(100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s, transform 0.01s 0.5s;\n\n  z-index: ', ';\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n    transition: opacity 0.5s, transform 0.01s 0s;\n    ', '\n  }\n\n  ', '\n  pointer-events: none;\n\n  ', '\n  & * {\n    pointer-events: auto;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavigationBar = require('./NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Expandable = require('../Expandable');

var _Box = require('../Box');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Navigation = function Navigation(_ref) {
  var children = _ref.children,
      menuContent = _ref.menuContent,
      _ref$withOverlay = _ref.withOverlay,
      withOverlay = _ref$withOverlay === undefined ? true : _ref$withOverlay,
      rest = _objectWithoutProperties(_ref, ['children', 'menuContent', 'withOverlay']);

  return _react2.default.createElement(
    _Expandable.Expandable,
    null,
    _react2.default.createElement(
      _NavigationBar2.default,
      rest,
      children
    ),
    _react2.default.createElement(
      NavMenu,
      { withOverlay: withOverlay },
      menuContent
    )
  );
};

var NavMenu = function NavMenu(_ref2) {
  var children = _ref2.children,
      withOverlay = _ref2.withOverlay;

  var _useContext = (0, _react.useContext)(_Expandable.ExpandableContext),
      isExpanded = _useContext.isExpanded,
      toggleExpanded = _useContext.toggleExpanded;

  var className = isExpanded ? 'isExpanded' : '';
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(NavOverlay, {
      withOverlay: withOverlay,
      onClick: toggleExpanded,
      className: className
    }),
    _react2.default.createElement(
      NavMenuContent,
      { className: className },
      children
    )
  );
};

var NavOverlay = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndices.overlay - 1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _color2.default)(theme.colors.whiteout.lightest).alpha(0.9).string();
});

var NavMenuContent = (0, _styledComponents2.default)(_Box.Box)(_templateObject2, function (_ref5) {
  var theme = _ref5.theme;
  return theme.zIndices.overlay - 1;
}, '' /*  */, '' /* ignore clicks on container */, '' /* but enable clicks on content */);

NavOverlay.displayName = 'NavOverlay';

exports.default = Navigation;
exports.NavToggle = _Expandable.ExpandableToggle;