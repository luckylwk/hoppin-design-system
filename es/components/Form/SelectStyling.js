var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Documentation: https://react-select.com/styles
 */

var getSelectStyles = function getSelectStyles(theme) {
  return {
    control: function control(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _extends({}, styles, {
        marginTop: '3px',
        padding: '3px 8px',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: theme.radii.small,
        borderColor: isFocused ? theme.colors.primary.base : theme.colors.neutral.light,
        boxShadow: null
      });
    },
    option: function option(styles, _ref2) {
      var data = _ref2.data,
          isDisabled = _ref2.isDisabled,
          isSelected = _ref2.isSelected;
      return _extends({}, styles, {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: 400,
        backgroundColor: isDisabled ? theme.colors.whiteout.lighter : isSelected ? theme.colors.whiteout.base : theme.colors.whiteout.lighter,
        color: isDisabled ? theme.colors.neutral.lighter : isSelected ? theme.colors.neutral.dark : theme.colors.neutral.base,
        cursor: isDisabled ? 'not-allowed' : 'default'
      });
    },
    input: function input(styles) {
      return _extends({}, styles, {
        backgroundColor: 'white',
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal
      });
    },
    placeholder: function placeholder(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal
      });
    },
    singleValue: function singleValue(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal
      });
    },
    /** Multi value specific.  */
    multiValue: function multiValue(styles, _ref3) {
      var data = _ref3.data;
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal,
        backgroundColor: theme.colors.neutral.lighter
      });
    },
    multiValueLabel: function multiValueLabel(styles, _ref4) {
      var data = _ref4.data;
      return _extends({}, styles, {
        fontSize: '16px',
        color: theme.colors.neutral.dark
      });
    },
    multiValueRemove: function multiValueRemove(styles, _ref5) {
      var data = _ref5.data;
      return _extends({}, styles, {
        color: theme.colors.neutral.dark,
        ':hover': {
          backgroundColor: theme.colors.neutral.lighter,
          color: theme.colors.neutral.dark
        }
      });
    }
  };
};

var getSelectTheme = function getSelectTheme(theme) {
  var colors = {
    primary: theme.colors.primary.base,
    primary75: theme.colors.primary.light,
    primary50: theme.colors.primary.lighter,
    primary25: theme.colors.primary.lightest,

    danger: theme.colors.danger.base,
    dangerLight: theme.colors.danger.lighter,

    neutral0: theme.colors.whiteout.lighter,
    neutral5: theme.colors.whiteout.light,
    neutral10: theme.colors.whiteout.base,
    neutral20: theme.colors.whiteout.dark,
    neutral30: theme.colors.whiteout.darker,
    neutral40: theme.colors.whiteout.darkest,
    neutral50: theme.colors.neutral.light,
    neutral60: theme.colors.neutral.base,
    neutral70: theme.colors.neutral.dark,
    neutral80: theme.colors.neutral.darker,
    neutral90: theme.colors.neutral.darkest
  };

  var borderRadius = theme.radii.small;
  // Used to calculate consistent margin/padding on elements
  var baseUnit = 4;
  // The minimum height of the control
  var controlHeight = 38;
  // The amount of space between the control and menu */
  var menuGutter = baseUnit * 2;

  var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
  };

  return {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
  };
};

export { getSelectTheme, getSelectStyles };

export default (function (theme) {
  return {
    styles: getSelectStyles(theme),
    theme: getSelectTheme(theme)
  };
});