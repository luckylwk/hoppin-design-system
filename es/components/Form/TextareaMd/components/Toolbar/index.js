function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 8px 16px;\n  position: absolute;\n  z-index: ", ";\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  background-color: ", ";\n  border-radius: 4px;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  height: 40px;\n  box-sizing: border-box;\n  pointer-events: none;\n  white-space: nowrap;\n\n  &::before {\n    content: '';\n    display: block;\n    width: 24px;\n    height: 24px;\n    transform: translateX(-50%) rotate(45deg);\n    background: ", ";\n    border-radius: 3px;\n    z-index: -1;\n\n    position: absolute;\n    bottom: -2px;\n    left: 50%;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ", ";\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Portal } from 'react-portal';
import { findDOMNode } from 'slate-react';
import styled from 'styled-components';
import { isEqual, debounce } from 'lodash';
import FormattingToolbar from './FormattingToolbar'; // import LinkToolbar from './LinkToolbar';

var Toolbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      active: false,
      mouseDown: false,
      link: undefined,
      top: '',
      left: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.update();

      if (typeof window !== 'undefined') {
        window.addEventListener('mousedown', _this.handleMouseDown);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousedown', _this.handleMouseDown);
        window.removeEventListener('mouseup', _this.handleMouseUp);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", debounce(function () {
      _this.update();
    }, 100));

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      _this.setState({
        mouseDown: true
      });

      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      _this.setState({
        mouseDown: false
      });

      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      var value = _this.props.value; // const link = editor.getLinkInSelection();

      var link = false;
      var selection = window.getSelection(); // value.isCollapsed is not correct when the user clicks outside of the Slate bounds
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

          if (!isEqual(_this.state, _newState)) {
            _this.setState(_newState);
          }
        }

        return;
      }

      var active = true;
      if (!value.startBlock) return; // don't display toolbar for code blocks, code-lines or inline code

      if (value.startBlock.type.match(/code/)) active = false; // don't show until user has released pointing device button

      if (_this.state.mouseDown && !link) active = false;
      var newState = {
        active: active,
        mouseDown: _this.state.mouseDown,
        link: _this.state.link || link,
        top: undefined,
        left: undefined
      };
      var padding = 16;
      var rect;

      if (link) {
        try {
          rect = findDOMNode(link).getBoundingClientRect();
        } catch (err) {// TODO
        }
      } else if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        rect = range.getBoundingClientRect();
      }

      if (!rect || !_this.menu || rect.top === 0 && rect.left === 0) {
        return;
      }

      var left = rect.left + window.scrollX - _this.menu.offsetWidth / 2 + rect.width / 2;
      newState.top = Math.round(rect.top + window.scrollY - _this.menu.offsetHeight) + "px";
      newState.left = Math.round(Math.max(padding, left)) + "px";

      if (!isEqual(_this.state, newState)) {
        _this.setState(newState);
      }
    });

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var style = {
      top: this.state.top,
      left: this.state.left
    };
    return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Menu, {
      active: this.state.active,
      ref: function ref(_ref) {
        return _this2.menu = _ref;
      },
      style: style
    },
    /*#__PURE__*/

    /*this.state.link ? (
    <LinkToolbar
      {...this.props}
      link={this.state.link}
      onBlur={this.hideLinkToolbar}
    />
    ) : */
    React.createElement(FormattingToolbar // onCreateLink={this.showLinkToolbar}
    , this.props)));
  };

  return Toolbar;
}(React.Component);

export { Toolbar as default };
export var Menu = styled.div(_templateObject(), function (props) {
  return props.theme.zIndices.overlay;
}, function (props) {
  return props.theme.colors.neutral.darker;
}, function (props) {
  return props.theme.colors.neutral.darker;
}, function (_ref2) {
  var active = _ref2.active;
  return active && "\n    transform: translateY(-6px) scale(1);\n    pointer-events: all;\n    opacity: 1;\n  ";
});