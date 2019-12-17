function customNormalize(editor, error) {
  switch (error.code) {
    case 'child_object_invalid':
      editor.wrapBlockByKey(error.child.key, 'paragraph');
      return;
    case 'child_type_invalid':
      editor.setNodeByKey(error.child.key, 'paragraph');
      return;
    default:
      return;
  }
}

var schema = {
  blocks: {
    paragraph: {
      marks: [{ type: 'bold' }, { type: 'italic' }, { type: 'deleted' }, { type: 'code' }]
    },
    heading1: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    heading2: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    heading3: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    heading4: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    heading5: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    heading6: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize
    },
    code: {
      marks: ['']
    },
    // "horizontal-rule": {
    //   isVoid: true,
    // },
    // image: {
    //   isVoid: true,
    // },
    // link: {
    //   nodes: [{ match: { object: "text" } }],
    // },
    // "block-toolbar": {
    //   isVoid: true,
    // },
    'list-item': {
      parent: [{ type: 'bulleted-list' }, { type: 'ordered-list' }, { type: 'todo-list' }],
      marks: [{ type: 'bold' }, { type: 'italic' }, { type: 'deleted' }, { type: 'code' }],
      nodes: [{
        match: [{ object: 'text' }, { type: 'image' }, { type: 'paragraph' }, { type: 'bulleted-list' }, { type: 'ordered-list' }, { type: 'todo-list' }]
      }]
    }
  },
  document: {
    nodes: [{
      match: [{ type: 'paragraph' }, { type: 'heading1' }, { type: 'heading2' }, { type: 'heading3' }, { type: 'heading4' }, { type: 'heading5' }, { type: 'heading6' }, { type: 'block-quote' }, { type: 'code' },
      // { type: "horizontal-rule" },
      // { type: "image" },
      { type: 'bulleted-list' }, { type: 'ordered-list' }, { type: 'todo-list' }],
      min: 1
    }],
    normalize: customNormalize
  }
};

export default schema;