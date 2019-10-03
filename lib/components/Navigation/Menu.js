'use strict';

exports.__esModule = true;
exports.MenuButton = exports.MenuSheet = exports.MenuToggle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Navigation = require('./Navigation');

var _Button = require('../Button');

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Logo = require('../Logo');

var _fi = require('react-icons/fi');

var _Expandable = require('../Expandable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MenuToggle = function MenuToggle() {
  return _react2.default.createElement(
    _Navigation.NavToggle,
    null,
    _react2.default.createElement(
      _Button.Button,
      { variant: 'subtle' },
      _react2.default.createElement(_fi.FiMenu, null)
    )
  );
};

MenuToggle.displayName = 'MenuToggle';

var MenuButton = (0, _styledComponents2.default)(_Button.Button)(_templateObject);
MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0
};

var MenuSheet = function MenuSheet(_ref) {
  var children = _ref.children,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? 'primary' : _ref$context,
      _ref$onLogoClick = _ref.onLogoClick,
      onLogoClick = _ref$onLogoClick === undefined ? function () {} : _ref$onLogoClick,
      rest = _objectWithoutProperties(_ref, ['children', 'context', 'onLogoClick']);

  var _useContext = (0, _react.useContext)(_Expandable.ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded;

  var handleLogoClick = function handleLogoClick(e) {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };
  return _react2.default.createElement(
    _Flex.Flex,
    {
      width: ['85%', null, '50%'],
      height: '100%',
      bg: context + '.base',
      position: 'absolute',
      right: 0,
      padding: 'large',
      flexDirection: 'column'
    },
    _react2.default.createElement(
      _Flex.Flex,
      null,
      _react2.default.createElement(
        _Box.Box,
        { objectFit: 'contain', onClick: handleLogoClick },
        _react2.default.createElement(_Logo.Logo, { context: 'whiteout' })
      ),
      _react2.default.createElement(
        _Navigation.NavToggle,
        null,
        _react2.default.createElement(
          _Button.Button,
          {
            variant: 'subtle',
            context: 'whiteout',
            padding: ['xsmall', null, 'small']
          },
          _react2.default.createElement(_fi.FiX, null)
        )
      )
    ),
    _react2.default.createElement(
      _Flex.Flex,
      _extends({
        flexDirection: 'column',
        flexGrow: 2,
        justifyItems: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }, rest),
      children
    )
  );
};

MenuSheet.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Works best with MenuButtons */
  children: _propTypes2.default.any,
  /** Callback for click on Logo, use to link up to your router implementation. */
  onLogoClick: _propTypes2.default.func
} : {};
MenuSheet.displayName = 'MenuSheet';

exports.MenuToggle = MenuToggle;
exports.MenuSheet = MenuSheet;
exports.MenuButton = MenuButton;