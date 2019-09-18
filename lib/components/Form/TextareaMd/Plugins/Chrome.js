'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('../components/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// From https://github.com/outline/rich-markdown-editor/blob/2bf3d7a2c111175d3d95b94bc3957535d7c44b6d/src/plugins/Chrome.js
// check repo for more Chrome (insert block, TOC,...)
function ChromePlugin() {
  function renderEditor(props, editor, next) {
    var children = next();

    return _react2.default.createElement(
      _react.Fragment,
      null,
      !props.readOnly && _react2.default.createElement(_Toolbar2.default, { value: editor.value, editor: editor }),
      children
    );
  }

  return { renderEditor: renderEditor };
}

exports.default = ChromePlugin;
module.exports = exports['default'];