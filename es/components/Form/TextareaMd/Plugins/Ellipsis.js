import isModKey from '../lib/isModKey';

export default function Ellipsis() {
  return {
    onKeyDown: function onKeyDown(ev, editor, next) {
      if (isModKey(ev) || ev.key !== ' ') return next();

      var value = editor.value;
      var startBlock = value.startBlock,
          selection = value.selection;

      if (selection.isExpanded) return next();
      if (!startBlock || startBlock.type.match(/code/)) return next();

      var startOffset = value.selection.start.offset - 3;
      var textNode = startBlock.getFirstText();
      if (!textNode) return next();

      var chars = textNode.text.slice(startOffset, startOffset + 3);

      // replaces three periods with a real ellipsis character
      if (chars === '...') {
        return editor.removeTextByKey(textNode.key, startOffset, 3).insertTextByKey(textNode.key, startOffset, '…');
      }

      return next();
    }
  };
}