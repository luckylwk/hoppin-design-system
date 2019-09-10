import proptypes from 'prop-types';
import React from 'react';

import { Editor } from 'slate-react';
import MarkdownSerializer from 'slate-md-serializer';

import { Value } from 'slate';
import Nodes from './Plugins/Nodes';
import Marks from './Plugins/Marks';
import MarkdownShortcuts from './Plugins/MarkdownShortcuts';
import MarkdownPaste from './Plugins/MarkdownPaste';
import KeyboardBehaviour from './Plugins/KeyboardBehaviour';
import KeyboardShortcuts from './Plugins/KeyboardShortcuts';
import Ellipsis from './Plugins/Ellipsis';
import Chrome from './Plugins/Chrome';

import schema from './lib/schema';
import queries from './lib/queries';

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
    tooltip: 'span',
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
      Ellipsis(),
      Chrome(),
    ];
    this.schema = schema;

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
    onChange && onChange(this.markdown.serialize(value));

    this.setState({ value });
  };

  handleBlur = (event, editor, next) => {
    const { onBlur } = this.props;
    onBlur && onBlur(this.markdown.serialize(this.state.value));

    next();
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
          onBlur={this.handleBlur}
          plugins={this.plugins}
          ref={el => (this.editor = el)}
          schema={this.schema}
          queries={queries}
          value={this.state.value}
          tooltip={this.props.tooltip}
        />
      </div>
    );
  }
}
