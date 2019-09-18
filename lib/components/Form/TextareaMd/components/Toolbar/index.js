'use strict';

exports.__esModule = true;
exports.Menu = exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 8px 16px;\n  position: absolute;\n  z-index: ', ';\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  background-color: ', ';\n  border-radius: 4px;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  height: 40px;\n  box-sizing: border-box;\n  pointer-events: none;\n  white-space: nowrap;\n\n  &::before {\n    content: \'\';\n    display: block;\n    width: 24px;\n    height: 24px;\n    transform: translateX(-50%) rotate(45deg);\n    background: ', ';\n    border-radius: 3px;\n    z-index: -1;\n\n    position: absolute;\n    bottom: -2px;\n    left: 50%;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ', ';\n\n  @media print {\n    display: none;\n  }\n'], ['\n  padding: 8px 16px;\n  position: absolute;\n  z-index: ', ';\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  background-color: ', ';\n  border-radius: 4px;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  height: 40px;\n  box-sizing: border-box;\n  pointer-events: none;\n  white-space: nowrap;\n\n  &::before {\n    content: \'\';\n    display: block;\n    width: 24px;\n    height: 24px;\n    transform: translateX(-50%) rotate(45deg);\n    background: ', ';\n    border-radius: 3px;\n    z-index: -1;\n\n    position: absolute;\n    bottom: -2px;\n    left: 50%;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ', ';\n\n  @media print {\n    display: none;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactPortal = require('react-portal');

var _slateReact = require('slate-react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

var _FormattingToolbar = require('./FormattingToolbar');

var _FormattingToolbar2 = _interopRequireDefault(_FormattingToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import LinkToolbar from './LinkToolbar';

var Toolbar = function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    var _temp, _this, _ret;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      active: false,
      mouseDown: false,
      link: undefined,
      top: '',
      left: ''
    }, _this.componentDidMount = function () {
      _this.update();
      if (typeof window !== 'undefined') {
        window.addEventListener('mousedown', _this.handleMouseDown);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    }, _this.componentWillUnmount = function () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousedown', _this.handleMouseDown);
        window.removeEventListener('mouseup', _this.handleMouseUp);
      }
    }, _this.componentWillReceiveProps = (0, _lodash.debounce)(function () {
      _this.update();
    }, 100), _this.handleMouseDown = function () {
      _this.setState({ mouseDown: true });
      _this.update();
    }, _this.handleMouseUp = function () {
      _this.setState({ mouseDown: false });
      _this.update();
    }, _this.update = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          editor = _this$props.editor;
      // const link = editor.getLinkInSelection();

      var link = false;
      var selection = window.getSelection();

      // value.isCollapsed is not correct when the user clicks outside of the Slate bounds
      // checking the window selection collapsed state as a fallback for this case
      var isCollapsed = value.selection.isCollapsed || selection.isCollapsed;

      if (isCollapsed && !link) {
        if (_this.state.active) {
          var _newState = {
            mouseDown: _this.state.mouseDown,
            active: false,
            link: undefined,
            top: '',
            left: ''
          };

          if (!(0, _lodash.isEqual)(_this.state, _newState)) {
            _this.setState(_newState);
          }
        }
        return;
      }

      var active = true;

      if (!value.startBlock) return;

      // don't display toolbar for code blocks, code-lines or inline code
      if (value.startBlock.type.match(/code/)) active = false;

      // don't show until user has released pointing device button
      if (_this.state.mouseDown && !link) active = false;

      var newState = {
        active: active,
        mouseDown: _this.state.mouseDown,
        link: _this.state.link || link,
        top: undefined,
        left: undefined
      };
      var padding = 16;
      var rect = void 0;

      if (link) {
        try {
          rect = (0, _slateReact.findDOMNode)(link).getBoundingClientRect();
        } catch (err) {
          // TODO
        }
      } else if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        rect = range.getBoundingClientRect();
      }

      if (!rect || !_this.menu || rect.top === 0 && rect.left === 0) {
        return;
      }

      var left = rect.left + window.scrollX - _this.menu.offsetWidth / 2 + rect.width / 2;
      newState.top = Math.round(rect.top + window.scrollY - _this.menu.offsetHeight) + 'px';
      newState.left = Math.round(Math.max(padding, left)) + 'px';

      if (!(0, _lodash.isEqual)(_this.state, newState)) {
        _this.setState(newState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // hideLinkToolbar = () => {
  //   this.setState({ link: undefined });
  //   this.update();
  // };

  // showLinkToolbar = ev => {
  //   ev.preventDefault();
  //   ev.stopPropagation();

  //   const link = this.props.editor.getLinkInSelection();
  //   this.setState({ link });
  // };

  Toolbar.prototype.render = function render() {
    var _this2 = this;

    var style = {
      top: this.state.top,
      left: this.state.left
    };

    return React.createElement(
      _reactPortal.Portal,
      null,
      React.createElement(
        Menu,
        {
          active: this.state.active,
          ref: function ref(_ref) {
            return _this2.menu = _ref;
          },
          style: style
        },

        /*this.state.link ? (
        <LinkToolbar
          {...this.props}
          link={this.state.link}
          onBlur={this.hideLinkToolbar}
        />
        ) : */
        React.createElement(_FormattingToolbar2.default
        // onCreateLink={this.showLinkToolbar}
        , this.props)
      )
    );
  };

  return Toolbar;
}(React.Component);

exports.default = Toolbar;
var Menu = exports.Menu = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.zIndexes.overlay;
}, function (props) {
  return props.theme.colors.neutral.darker;
}, function (props) {
  return props.theme.colors.neutral.darker;
}, function (_ref2) {
  var active = _ref2.active;
  return active && '\n    transform: translateY(-6px) scale(1);\n    pointer-events: all;\n    opacity: 1;\n  ';
});