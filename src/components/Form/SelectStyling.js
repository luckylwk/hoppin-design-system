/**
 * Documentation: https://react-select.com/styles
 *
 * TODO: Make it dependent on a `type` for rendering
 * primary vs host.
 * TODO: Create variables for the colors.
 */

const SelectStyling = {
  control: (styles, { isFocused }) => ({
    ...styles,
    marginTop: '3px',
    padding: '3px 8px',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: isFocused ? '#44E2D6' : '#e7e7e7',
    boxShadow: null,
  }),
  option: (styles, { data, isDisabled, isSelected }) => {
    return {
      ...styles,
      fontSize: '16px',
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
      backgroundColor: isDisabled ? null : isSelected ? '#eee' : null,
      color: isDisabled ? '#ccc' : isSelected ? '#44E2D6' : '#334e68',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: (styles) => {
    return {
      ...styles,
      backgroundColor: 'white',
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    };
  },
  singleValue: (styles) => {
    return {
      ...styles,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    };
  },
  /** Multi value specific.  */
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
      backgroundColor: '#F0F4F8',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: '16px',
    color: '#334e68',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#334e68',
    ':hover': {
      backgroundColor: '#BCCCDC',
      color: '#334e68',
    },
  }),
};

export default SelectStyling;
