import { getEventTransfer } from 'slate-react';
import MarkdownSerializer from '@edithq/slate-md-serializer';

export default function MarkdownPaste() {
  var MarkdownSerializerInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new MarkdownSerializer();

  return {
    onPaste: function onPaste(ev, editor, next) {
      var transfer = getEventTransfer(ev);
      var text = transfer.text;

      if (transfer.type !== 'text' && transfer.type !== 'html') return next();

      var fragment = MarkdownSerializerInstance.deserialize(text || '');

      console.log(fragment);
      if (!fragment) return;

      return editor.insertFragment(fragment.document);
    }
  };
}