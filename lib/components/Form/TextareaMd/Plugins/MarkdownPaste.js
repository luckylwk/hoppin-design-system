"use strict";

exports.__esModule = true;
exports["default"] = MarkdownPaste;

var _slateReact = require("slate-react");

var _slateMdSerializer = _interopRequireDefault(require("slate-md-serializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MarkdownPaste(MarkdownSerializerInstance) {
  if (MarkdownSerializerInstance === void 0) {
    MarkdownSerializerInstance = new _slateMdSerializer["default"]();
  }

  return {
    onPaste: function onPaste(ev, editor, next) {
      var transfer = (0, _slateReact.getEventTransfer)(ev);
      var text = transfer.text;
      if (transfer.type !== 'text' && transfer.type !== 'html') return next();
      var fragment = MarkdownSerializerInstance.deserialize(text || '');
      if (!fragment) return;
      return editor.insertFragment(fragment.document);
    }
  };
}

module.exports = exports.default;