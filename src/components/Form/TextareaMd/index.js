import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { space } from 'styled-system';

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
    children: PropTypes.node,

    /**
     * Callback to be executed when the text loses focus (onBlur event).
     */
    onBlur: PropTypes.func,

    /**
     * A callback function that is fired whenever the content changes.
     */
    onChange: PropTypes.func,

    /**
     * The initial value of the editor.
     */
    // value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
      <StyledEditor
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        plugins={this.plugins}
        ref={el => (this.editor = el)}
        schema={this.schema}
        queries={queries}
        value={this.state.value}
        tooltip={this.props.tooltip}
      />
    );
  }
}

const StyledEditor = styled(Editor)`
  box-sizing: border-box;
  display: block;

  ${space}

  background: ${props => props.theme.colors.whiteout.lighter};

  border: 1px solid transparent;
  border-color: ${props => {
    if (props.theme.colors[props.state] !== undefined) {
      return props.theme.colors[props.state].light;
    } else {
      return props.theme.colors.neutral.light;
    }
  }};
  border-radius: ${({ theme }) => theme.radii.small};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${props => {
      switch (props.state) {
        case 'danger':
          return props.theme.colors.danger.base;
        case 'neutral':
        default:
          return props.theme.colors.primary.base;
      }
    }};
    background: ${props => props.theme.colors.whiteout.base};
  }
`;

StyledEditor.defaultProps = {
  state: 'neutral',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
};
