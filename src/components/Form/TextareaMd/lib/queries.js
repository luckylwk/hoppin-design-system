const queries = {
  isLinkActive(editor) {
    const { value } = editor;
    const { inlines } = value;
    return inlines.some((i) => i.type === 'link');
  },

  isSelectionInHeading(editor) {
    const { value } = editor;
    const { startBlock } = value;
    return !!(startBlock && startBlock.type.match(/heading/));
  },

  getBlockMarks(editor) {
    const {
      value: { startBlock, anchorBlock },
      props: { schema },
    } = editor;
    const currentBlock = startBlock || anchorBlock || { type: 'paragraph' };
    return (
      (schema.blocks[currentBlock.type] &&
        schema.blocks[currentBlock.type].marks) ||
      []
    );
  },

  getLinkInSelection(editor) {
    try {
      const { value } = editor;
      const selectedLinks = value.document
        .getLeafInlinesAtRange(value.selection)
        .filter((node) => node.type === 'link');

      if (selectedLinks.size) {
        const link = selectedLinks.first();
        const { selection } = value;

        if (selection.anchor.isInNode(link) || selection.focus.isInNode(link)) {
          return link;
        }
      }
    } catch (err) {
      // It's okay.
      console.error(err);
    }
  },
};

export default queries;
