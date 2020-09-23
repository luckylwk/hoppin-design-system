import { getEventTransfer } from 'slate-react';
import MarkdownSerializer from 'slate-md-serializer';
export default function MarkdownPaste(MarkdownSerializerInstance) {
  if (MarkdownSerializerInstance === void 0) {
    MarkdownSerializerInstance = new MarkdownSerializer();
  }

  return {
    onPaste: function onPaste(ev, editor, next) {
      var transfer = getEventTransfer(ev);
      var text = transfer.text;
      if (transfer.type !== 'text' && transfer.type !== 'html') return next();
      var fragment = MarkdownSerializerInstance.deserialize(text || '');
      if (!fragment) return;
      return editor.insertFragment(fragment.document);
    }
  };
}