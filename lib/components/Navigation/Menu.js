'use strict';

exports.__esModule = true;
exports.MenuButton = exports.MenuSheet = exports.MenuToggle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose([''], ['']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  transition: margin-right ', ';\n\n  .isExpanded & {\n    margin-right: 0;\n  }\n'], ['\n  transition: margin-right ', ';\n\n  .isExpanded & {\n    margin-right: 0;\n  }\n']);

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

// ---------------------------

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

// ---------------------------

var MenuButton = (0, _styledComponents2.default)(_Button.Button)(_templateObject);

MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0
};

MenuButton.displayName = 'MenuButton';

// ---------------------------

var MenuSheetWrapper = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.motions.base;
});

// ---------------------------

var MenuSheet = function MenuSheet(_ref2) {
  var children = _ref2.children,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? 'primary' : _ref2$context,
      _ref2$onLogoClick = _ref2.onLogoClick,
      onLogoClick = _ref2$onLogoClick === undefined ? function () {} : _ref2$onLogoClick,
      rest = _objectWithoutProperties(_ref2, ['children', 'context', 'onLogoClick']);

  var _useContext = (0, _react.useContext)(_Expandable.ExpandableContext),
      toggleExpanded = _useContext.toggleExpanded,
      isExpanded = _useContext.isExpanded;

  var handleLogoClick = function handleLogoClick(e) {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };

  return _react2.default.createElement(
    MenuSheetWrapper,
    {
      position: 'absolute',
      height: '100%',
      width: ['100%', '85%', '35%'],
      marginRight: ['-100%', '-85%', '-35%'],
      right: 0,
      bg: 'neutral.darker',
      padding: 'large',
      flexDirection: 'column',
      isExpanded: isExpanded
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