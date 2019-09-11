function customNormalize(editor, error) {
  // if (error.code === 'child_object_invalid') {
  //   editor.unwrapInlineByKey(error.child.key, error.child.type);
  // }

  console.log('normalzing', error);
  switch (error.code) {
    case 'child_object_invalid':
      editor.wrapBlockByKey(error.child.key, 'paragraph');
      return;
    case 'child_type_invalid':
      editor.setNodeByKey(error.child.key, 'paragraph');
      return;
  }
}

const schema = {
  blocks: {
    heading1: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    heading2: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    heading3: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    heading4: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    heading5: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    heading6: {
      nodes: [{ match: { object: 'text' } }],
      marks: [''],
      normalize: customNormalize,
    },
    code: {
      marks: [''],
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
      parent: [
        { type: 'bulleted-list' },
        { type: 'ordered-list' },
        { type: 'todo-list' },
      ],
      nodes: [
        {
          match: [
            { object: 'text' },
            { type: 'image' },
            { type: 'paragraph' },
            { type: 'bulleted-list' },
            { type: 'ordered-list' },
            { type: 'todo-list' },
          ],
        },
      ],
    },
  },
  marks: {
    types: [
      { type: 'bold' },
      { type: 'italic' },
      { type: 'code' },
      // { type: 'deleted' },
    ],
  },
  document: {
    nodes: [
      {
        match: [
          { type: 'paragraph' },
          { type: 'heading1' },
          { type: 'heading2' },
          { type: 'heading3' },
          { type: 'heading4' },
          { type: 'heading5' },
          { type: 'heading6' },
          { type: 'block-quote' },
          { type: 'code' },
          // { type: "horizontal-rule" },
          // { type: "image" },
          { type: 'bulleted-list' },
          { type: 'ordered-list' },
          { type: 'todo-list' },
          // { type: "block-toolbar" },
          // { type: "table" },
          // { type: 'link' },
        ],
        min: 1,
      },
    ],
    normalize: customNormalize,
  },
};

export default schema;
