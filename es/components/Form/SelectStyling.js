var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Documentation: https://react-select.com/styles
 *
 * TODO: Make it dependent on a `type` for rendering
 * primary vs host.
 * TODO: Create variables for the colors.
 */

var SelectStyling = {
  control: function control(styles, _ref) {
    var isFocused = _ref.isFocused;
    return _extends({}, styles, {
      marginTop: '3px',
      padding: '3px 8px',
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: isFocused ? '#44E2D6' : '#e7e7e7',
      boxShadow: null
    });
  },
  option: function option(styles, _ref2) {
    var data = _ref2.data,
        isDisabled = _ref2.isDisabled,
        isSelected = _ref2.isSelected;

    return _extends({}, styles, {
      fontSize: '16px',
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
      backgroundColor: isDisabled ? null : isSelected ? '#eee' : null,
      color: isDisabled ? '#ccc' : isSelected ? '#44E2D6' : '#334e68',
      cursor: isDisabled ? 'not-allowed' : 'default'
    });
  },
  input: function input(styles) {
    return _extends({}, styles, {
      backgroundColor: 'white',
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400
    });
  },
  placeholder: function placeholder(styles) {
    return _extends({}, styles, {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400
    });
  },
  singleValue: function singleValue(styles) {
    return _extends({}, styles, {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400
    });
  },
  /** Multi value specific.  */
  multiValue: function multiValue(styles, _ref3) {
    var data = _ref3.data;

    return _extends({}, styles, {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
      backgroundColor: '#F0F4F8'
    });
  },
  multiValueLabel: function multiValueLabel(styles, _ref4) {
    var data = _ref4.data;
    return _extends({}, styles, {
      fontSize: '16px',
      color: '#334e68'
    });
  },
  multiValueRemove: function multiValueRemove(styles, _ref5) {
    var data = _ref5.data;
    return _extends({}, styles, {
      color: '#334e68',
      ':hover': {
        backgroundColor: '#BCCCDC',
        color: '#334e68'
      }
    });
  }
};

export default SelectStyling;