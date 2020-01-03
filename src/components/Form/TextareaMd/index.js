import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { space, layout, flexbox, fontSize } from 'styled-system';

import { Label, RequiredText } from '../.';

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

import Schema from './lib/Schema';
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

// ---------------------------

/**
 * A rich text editor.
 */
class TextareaMdField extends React.Component {
  constructor(props) {
    super(props);

    this.markdown = new MarkdownSerializer();
    this.plugins = [
      Nodes,
      Marks,
      KeyboardBehaviour(),
      KeyboardShortcuts(),
      MarkdownShortcuts(props.enableBlocks, props.enableMarks),
      MarkdownPaste(this.markdown),
      Ellipsis(),
      Chrome(),
    ];
    this.schema = this.makeSchema(props);

    this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: this.markdown.deserialize(props.initialValue),
    };
  }

  makeSchema = (props = this.props) => {
    const { enableBlocks, enableMarks, disableBlocks, disableMarks } = props;

    let customNodes = [];
    // if we have disableBlocks, ignore enableBlocks
    if (disableBlocks && disableBlocks.length > 0) {
      // map over all available nodes in Schema
      Schema.document.nodes[0].match.map(node => {
        // pick the ones that are not disabled
        if (disableBlocks.indexOf(node.type) < 0) {
          customNodes.push(node);
        }
        return true;
      });
      // if we have don't have disableBlocks, use enableBlocks if available
    } else if (enableBlocks && enableBlocks.length > 0) {
      // map over all available nodes in Schema
      Schema.document.nodes[0].match.map(node => {
        // pick the ones that are not disabled
        if (enableBlocks.indexOf(node.type) > -1) {
          customNodes.push(node);
        }
        return true;
      });
      // default to Schema as is
    } else {
      customNodes = [...Schema.document.nodes[0].match];
    }

    // if we have disableMarks, ignore enableMarks
    if (disableMarks && disableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(Schema.blocks).map(block => {
        const tempBlockMarks = [];
        const blockMarks = Schema.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(mark => {
            // pick the ones that are not disabled
            if (disableMarks.indexOf(mark.type) < 0) {
              tempBlockMarks.push(mark);
            }
            return true;
          });
          Schema.blocks[block].marks = tempBlockMarks;
        }
        return true;
      });

      // if we have don't have disableMarks, use enableMarks if available
    } else if (enableMarks && enableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(Schema.blocks).map(block => {
        const tempBlockMarks = [];
        const blockMarks = Schema.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(mark => {
            // pick the ones that are not disabled
            if (enableMarks.indexOf(mark.type) > -1) {
              tempBlockMarks.push(mark);
            }
            return true;
          });
          Schema.blocks[block].marks = tempBlockMarks;
        }
        return true;
      });
      // default to Schema as is
    }

    const newSchema = { ...Schema };
    newSchema.document.nodes[0].match = customNodes;
    return newSchema;
  };

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
    onChange &&
      onChange({
        target: {
          type: 'textarea',
          name: this.props.name,
          value: this.markdown.serialize(value),
        },
      });

    this.setState({ value });
  };

  handleBlur = (event, editor, next) => {
    const { onBlur } = this.props;
    onBlur &&
      onBlur({
        target: {
          type: 'textarea',
          name: this.props.name,
          value: this.markdown.serialize(this.state.value),
        },
      });

    next();
  };

  serialise = value => {
    if (Value.isValue(value)) {
      return this.markdown.serialize(value);
    }

    return value;
  };

  render() {
    const {
      initialValue,
      onChange,
      onBlur,
      enableMarks,
      enableBlocks,
      disableMarks,
      disableBlocks,
      ...rest
    } = this.props;

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
        {...rest}
      />
    );
  }
}

// ---------------------------

const StyledEditor = styled(Editor)`
  box-sizing: border-box;
  display: block;

  ${space}
  ${layout}
  ${flexbox}
  ${fontSize}

  background: ${({ theme }) => theme.colors.whiteout.lighter};

  border: 1px solid transparent;
  border-color: ${({ theme, context }) => {
    if (theme.colors[context] !== undefined) {
      return theme.colors[context].light;
    } else {
      return theme.colors.neutral.light;
    }
  }};
  border-radius: ${({ theme }) => theme.radii.small};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme, context }) => {
      if (context !== 'neutral' && theme.colors[context] !== undefined) {
        return theme.colors[context].base;
      } else {
        return theme.colors.primary.base;
      }
    }};
    background: ${({ theme, initialValue }) =>
      initialValue && initialValue.length > 0
        ? theme.colors.whiteout.base
        : theme.colors.whiteout.light};
  }
`;

StyledEditor.defaultProps = {
  context: 'neutral',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
  fontSize: 'body',
};

// ---------------------------

const TextareaMd = ({ label, required, ...rest }) => {
  const LabelOrFragment = label ? Label : Fragment;
  const labelProps = label ? { label, htmlFor: rest.name } : {};
  const textareaProps = label ? { marginTop: 'small' } : {};
  return (
    <LabelOrFragment {...labelProps}>
      {label}
      {label && required && <RequiredText>*required</RequiredText>}
      <TextareaMdField {...rest} {...textareaProps} />
    </LabelOrFragment>
  );
};

TextareaMd.displayName = 'TextareaMd';

TextareaMd.propTypes = {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: PropTypes.string,

  /**
   * The initial value of the editor.
   */
  initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: PropTypes.func,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: PropTypes.func,

  /**
   * Supply an array of permissible blocks, disable all others
   */
  enableBlocks: PropTypes.array,

  /**
   * Supply an array of permissible marks, disable all others
   */
  enableMarks: PropTypes.array,

  /**
   * Alternatively supply an array of blocks to disable, keep all others. Only supply either enableBlocks OR disableBlocks. Disable wins in case both are supplied.
   */
  disableBlocks: PropTypes.array,
  /**
   * Alternatively supply an array of marks to disable, keep all others. Only supply either enableMarks OR disableMarks. Disable wins in case both are supplied.
   */
  disableMarks: PropTypes.array,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string,
};

TextareaMd.defaultProps = {
  initialValue: '',
  tooltip: 'span',
  enableBlocks: [
    'paragraph',
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'code',
    'block-quote',
    'list-item',
    'ordered-list',
    'unordered-list',
  ],
  enableMarks: ['bold', 'italic', 'strikethrough', 'code'],
  disableBlocks: null,
  disableMarks: null,
};

export default TextareaMd;
