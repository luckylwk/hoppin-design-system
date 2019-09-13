'use strict';

exports.__esModule = true;
exports.default = MarkdownPaste;

var _slateReact = require('slate-react');

var _slateMdSerializer = require('slate-md-serializer');

var _slateMdSerializer2 = _interopRequireDefault(_slateMdSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MarkdownPaste() {
  var MarkdownSerializerInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _slateMdSerializer2.default();

  return {
    onPaste: function onPaste(ev, editor, next) {
      var transfer = (0, _slateReact.getEventTransfer)(ev);
      var text = transfer.text;

      if (transfer.type !== 'text' && transfer.type !== 'html') return next();

      var fragment = MarkdownSerializerInstance.deserialize(text || '');

      console.log('💩', fragment);
      if (!fragment) return;

      return editor.insertFragment(fragment.document);
    }
  };
}
module.exports = exports['default'];