import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';
import Input from './Input';

import { FiX } from 'react-icons/fi';

/**
 * From: https://codepen.io/srph/pen/WrPywK?editors=1111
 */

const ENTER_KEY_CODE = 13;
const TAB_KEY_CODE = 9;
const COMMA_KEY_CODE = 188;
const BACKSPACE_KEY_CODE = 8;
const KEY_CODES = [ENTER_KEY_CODE, TAB_KEY_CODE, COMMA_KEY_CODE];

// const List = styled.ul`
//     padding: 0rem;

//     background: #f7f7f7;

//     border: 1px solid #ddd;
//     border-radius: 5px;
// `

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  margin: ${props => props.theme.space[1]};

  background: white;

  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 300;

  color: ${props => {
    switch (props.state) {
      case 'danger':
        return props.theme.colors.danger;
      default:
        return typeof props.theme.colors.primary === 'object'
          ? props.theme.colors.primary.base
          : props.theme.colors.primary;
    }
  }};

  border-radius: 5px;
  border: 1px solid
    ${({ theme, state }) => {
      switch (state) {
        case 'danger':
          return theme.colors.danger;
        default:
          return typeof theme.colors.primary === 'object'
            ? theme.colors.shadower.base
            : theme.colors.primary;
      }
    }};

  cursor: pointer;
`;

class TagInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focused: false,
      input: '',
    };
  }

  /**
   * To handle any keypress
   * @param {*} e
   */
  handleInputChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  /**
   *
   */
  handleInputKeyDown = event => {
    // When tabbing, prevent switching to other input
    if (event.keyCode === TAB_KEY_CODE || event.keyCode === COMMA_KEY_CODE) {
      event.preventDefault();
    }

    // Check if its an enter, tab or comma.
    if (KEY_CODES.indexOf(event.keyCode) > -1) {
      const { value } = event.target;

      // Add as an item and empty the input.
      let items = [...this.state.items, value];
      this.setState(state => ({
        items: items,
        input: '',
      }));

      // Sync to redux state
      this.props.handleChangeToItems(items);
    }

    // If the key is a backspace it will remove the entire item
    if (
      this.state.items.length &&
      event.keyCode === BACKSPACE_KEY_CODE &&
      !this.state.input.length
    ) {
      let items = this.state.items.slice(0, this.state.items.length - 1);
      this.setState(state => ({
        items: items,
      }));

      // Sync to redux state
      this.props.handleChangeToItems(items);
    }
  };

  /**
   * Handler for when clicking on a cross to delete.
   */
  handleRemoveItem = index => {
    return () => {
      let items = this.state.items;
      let filteredItems = items.filter((_, i) => i !== index);

      this.setState({ items: filteredItems });

      this.props.handleChangeToItems(filteredItems);
    };
  };

  render() {
    return (
      <Box>
        {/* ... */}
        <Input
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
          my={[2, 0]}
          style={{
            width: '100%',
            border: '1px solid #e7e7e7',
            outline: 'none',
            background: '#f7f7f7',
            borderRadius: '5px',
          }}
        />

        {/* List all existing email addresses. */}
        <List>
          {this.state.items.map((email, ix) => (
            <Item key={`item-${ix}`} onClick={this.handleRemoveItem(ix)}>
              {email}
              <FiX
                size={12}
                style={{
                  marginLeft: '0.1rem',
                  position: 'relative',
                  top: '0.1em',
                }}
              />
            </Item>
          ))}
        </List>
      </Box>
    );
  }
}

TagInput.propTypes = {
  disabled: PropTypes.bool,
  state: PropTypes.string,
  handleChangeToItems: PropTypes.func,
};

TagInput.defaultProps = {
  disabled: false,
  state: 'normal',
};

TagInput.displayName = 'TagsInput';

export default TagInput;
