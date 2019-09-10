import { getEventTransfer } from 'slate-react';
import MarkdownSerializer from 'slate-md-serializer';

export default function MarkdownPaste(
  MarkdownSerializerInstance = new MarkdownSerializer()
) {
  return {
    onPaste(ev, editor, next) {
      const transfer = getEventTransfer(ev);
      const { text } = transfer;
      if (transfer.type !== 'text' && transfer.type !== 'html') return next();

      const fragment = MarkdownSerializerInstance.deserialize(text || '');

      console.log(fragment);
      if (!fragment) return;

      return editor.insertFragment(fragment.document);
    },
  };
}
