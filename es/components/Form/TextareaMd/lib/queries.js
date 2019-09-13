var queries = {
  isLinkActive: function isLinkActive(editor) {
    var value = editor.value;
    var inlines = value.inlines;

    return inlines.some(function (i) {
      return i.type === 'link';
    });
  },
  isSelectionInHeading: function isSelectionInHeading(editor) {
    var value = editor.value;
    var startBlock = value.startBlock;

    return !!(startBlock && startBlock.type.match(/heading/));
  },
  getBlockMarks: function getBlockMarks(editor) {
    var _editor$value = editor.value,
        startBlock = _editor$value.startBlock,
        anchorBlock = _editor$value.anchorBlock,
        schema = editor.props.schema;

    var currentBlock = startBlock || anchorBlock || { type: 'paragraph' };
    return schema.blocks[currentBlock.type] && schema.blocks[currentBlock.type].marks || [];
  },
  getLinkInSelection: function getLinkInSelection(editor) {
    try {
      var value = editor.value;

      var selectedLinks = value.document.getLeafInlinesAtRange(value.selection).filter(function (node) {
        return node.type === 'link';
      });

      if (selectedLinks.size) {
        var link = selectedLinks.first();
        var selection = value.selection;


        if (selection.anchor.isInNode(link) || selection.focus.isInNode(link)) {
          return link;
        }
      }
    } catch (err) {
      // It's okay.
      console.error(err);
    }
  }
};

export default queries;