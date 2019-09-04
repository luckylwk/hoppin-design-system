var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: 0;\n  padding: 0;\n'], ['\n  margin: 0;\n  padding: 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  padding: ', ' ', ';\n  margin: ', ';\n\n  background: white;\n\n  font-family: ', ';\n  font-size: 1rem;\n  font-weight: 300;\n\n  color: ', ';\n\n  border-radius: 5px;\n  border: 1px solid\n    ', ';\n\n  cursor: pointer;\n'], ['\n  display: inline-block;\n  padding: ', ' ', ';\n  margin: ', ';\n\n  background: white;\n\n  font-family: ', ';\n  font-size: 1rem;\n  font-weight: 300;\n\n  color: ', ';\n\n  border-radius: 5px;\n  border: 1px solid\n    ', ';\n\n  cursor: pointer;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';
import Input from './Input';

import { FiX } from 'react-icons/fi';

/**
 * From: https://codepen.io/srph/pen/WrPywK?editors=1111
 */

var ENTER_KEY_CODE = 13;
var TAB_KEY_CODE = 9;
var COMMA_KEY_CODE = 188;
var BACKSPACE_KEY_CODE = 8;
var KEY_CODES = [ENTER_KEY_CODE, TAB_KEY_CODE, COMMA_KEY_CODE];

// const List = styled.ul`
//     padding: 0rem;

//     background: #f7f7f7;

//     border: 1px solid #ddd;
//     border-radius: 5px;
// `

var List = styled.ul(_templateObject);

var Item = styled.li(_templateObject2, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.fonts.secondary;
}, function (props) {
  switch (props.state) {
    case 'danger':
      return props.theme.colors.danger;
    default:
      return _typeof(props.theme.colors.primary) === 'object' ? props.theme.colors.primary.base : props.theme.colors.primary;
  }
}, function (_ref) {
  var theme = _ref.theme,
      state = _ref.state;

  switch (state) {
    case 'danger':
      return theme.colors.danger;
    default:
      return _typeof(theme.colors.primary) === 'object' ? theme.colors.shadower.base : theme.colors.primary;
  }
});

var TagInput = function (_Component) {
  _inherits(TagInput, _Component);

  function TagInput(props) {
    _classCallCheck(this, TagInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleInputChange = function (event) {
      _this.setState({
        input: event.target.value
      });
    };

    _this.handleInputKeyDown = function (event) {
      // When tabbing, prevent switching to other input
      if (event.keyCode === TAB_KEY_CODE || event.keyCode === COMMA_KEY_CODE) {
        event.preventDefault();
      }

      // Check if its an enter, tab or comma.
      if (KEY_CODES.indexOf(event.keyCode) > -1) {
        var value = event.target.value;

        // Add as an item and empty the input.

        var items = [].concat(_this.state.items, [value]);
        _this.setState(function (state) {
          return {
            items: items,
            input: ''
          };
        });

        // Sync to redux state
        _this.props.handleChangeToItems(items);
      }

      // If the key is a backspace it will remove the entire item
      if (_this.state.items.length && event.keyCode === BACKSPACE_KEY_CODE && !_this.state.input.length) {
        var _items = _this.state.items.slice(0, _this.state.items.length - 1);
        _this.setState(function (state) {
          return {
            items: _items
          };
        });

        // Sync to redux state
        _this.props.handleChangeToItems(_items);
      }
    };

    _this.handleRemoveItem = function (index) {
      return function () {
        var items = _this.state.items;
        var filteredItems = items.filter(function (_, i) {
          return i !== index;
        });

        _this.setState({ items: filteredItems });

        _this.props.handleChangeToItems(filteredItems);
      };
    };

    _this.state = {
      items: [],
      focused: false,
      input: ''
    };
    return _this;
  }

  /**
   * To handle any keypress
   * @param {*} e
   */


  /**
   *
   */


  /**
   * Handler for when clicking on a cross to delete.
   */


  TagInput.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      Box,
      null,
      React.createElement(Input, {
        value: this.state.input,
        onChange: this.handleInputChange,
        onKeyDown: this.handleInputKeyDown,
        my: [2, 0],
        style: {
          width: '100%',
          border: '1px solid #e7e7e7',
          outline: 'none',
          background: '#f7f7f7',
          borderRadius: '5px'
        }
      }),
      React.createElement(
        List,
        null,
        this.state.items.map(function (email, ix) {
          return React.createElement(
            Item,
            { key: 'item-' + ix, onClick: _this2.handleRemoveItem(ix) },
            email,
            React.createElement(FiX, {
              size: 12,
              style: {
                marginLeft: '0.1rem',
                position: 'relative',
                top: '0.1em'
              }
            })
          );
        })
      )
    );
  };

  return TagInput;
}(Component);

TagInput.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  state: PropTypes.string,
  handleChangeToItems: PropTypes.func
} : {};

TagInput.defaultProps = {
  disabled: false,
  state: 'normal'
};

TagInput.displayName = 'TagsInput';

export default TagInput;