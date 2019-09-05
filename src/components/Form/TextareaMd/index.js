import proptypes from 'prop-types';
import React from 'react';

import { Editor } from 'slate-react';
import MarkdownSerializer from '@edithq/slate-md-serializer';

import { Value } from 'slate';
import Nodes from './Plugins/Nodes';
import Marks from './Plugins/Marks';
import MarkdownShortcuts from './Plugins/MarkdownShortcuts';
import MarkdownPaste from './Plugins/MarkdownPaste';
import KeyboardBehaviour from './Plugins/KeyboardBehaviour';
import KeyboardShortcuts from './Plugins/KeyboardShortcuts';
import Schema from './lib/Schema';

const EMPTY_VALUE = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'line',
        nodes: [
          {
            object: 'text',
            text: '',
          },
        ],
      },
    ],
  },
};

/**
 * A rich text editor.
 */
export default class TextareaMd extends React.Component {
  static propTypes = {
    /**
     * The content of the editor.
     */
    children: proptypes.node,

    /**
     * Callback to be executed when the text loses focus (onBlur event).
     */
    onBlur: proptypes.func,

    /**
     * A callback function that is fired whenever the content changes.
     */
    onChange: proptypes.func,

    /**
     * The initial value of the editor.
     */
    // value: proptypes.oneOfType([proptypes.object, proptypes.string]),
    initialValue: proptypes.oneOfType([proptypes.object, proptypes.string]),
  };

  static defaultProps = {
    initialValue: '',
  };

  constructor(props) {
    super(props);

    this.markdown = new MarkdownSerializer();
    this.plugins = [
      Nodes,
      Marks,
      KeyboardBehaviour(),
      KeyboardShortcuts(),
      MarkdownShortcuts(),
      MarkdownPaste(this.markdown),
    ];
    this.schema = Schema;

    this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: this.markdown.deserialize(props.initialValue),
    };
  }

  deserialize = value => {
    if (Value.isValue(value)) {
      return value;
    }

    if (typeof value === 'string') {
      return this.markdown.deserialize(value);
    }

    return Value.fromJSON(value || EMPTY_VALUE);
  };

  handleChange = ({ value }) => {
    const { onChange } = this.props;
    this.setState({ value });

    onChange && onChange(this.markdown.serialize(value));
  };

  serialise = value => {
    if (Value.isValue(value)) {
      return this.markdown.serialize(value);
    }

    return value;
  };

  render() {
    return (
      <div ref={el => (this.container = el)}>
        <Editor
          onChange={this.handleChange}
          plugins={this.plugins}
          ref={el => (this.editor = el)}
          schema={this.schema}
          value={this.state.value}
        />
      </div>
    );
  }
}
