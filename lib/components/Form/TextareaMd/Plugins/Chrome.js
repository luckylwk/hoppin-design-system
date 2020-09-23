"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Toolbar = _interopRequireDefault(require("../components/Toolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// From https://github.com/outline/rich-markdown-editor/blob/2bf3d7a2c111175d3d95b94bc3957535d7c44b6d/src/plugins/Chrome.js
// check repo for more Chrome (insert block, TOC,...)
function ChromePlugin() {
  function renderEditor(props, editor, next) {
    var children = next();
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, !props.readOnly && /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      value: editor.value,
      editor: editor
    }), children);
  }

  return {
    renderEditor: renderEditor
  };
}

var _default = ChromePlugin;
exports["default"] = _default;
module.exports = exports.default;