var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Documentation: https://react-select.com/styles
 */

var getSelectStyles = function getSelectStyles(theme) {
  return {
    control: function control(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _extends({}, styles, {
        marginTop: '4px',
        padding: '1px 8px',
        backgroundColor: 'white',
        borderWidth: theme.borderWidths.base,
        borderRadius: theme.radii.small,
        borderColor: isFocused ? theme.colors.primary.lighter : theme.colors.neutral.lighter,
        ':hover': {
          borderColor: isFocused ? theme.colors.primary.lighter : theme.colors.neutral.lighter
        },
        boxShadow: null,
        minHeight: '2rem',
        lineHeight: 1
      });
    },
    option: function option(styles, _ref2) {
      var isDisabled = _ref2.isDisabled,
          isSelected = _ref2.isSelected;
      return _extends({}, styles, {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal,
        backgroundColor: isDisabled ? theme.colors.whiteout.lighter : isSelected ? theme.colors.whiteout.base : theme.colors.whiteout.lighter,
        color: isDisabled ? theme.colors.neutral.light : isSelected ? theme.colors.neutral.dark : theme.colors.neutral.base,
        cursor: isDisabled ? 'not-allowed' : 'default'
      });
    },
    input: function input(styles) {
      return _extends({}, styles, {
        backgroundColor: 'white',
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal
      });
    },
    placeholder: function placeholder(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.neutral.light
      });
    },
    singleValue: function singleValue(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal
      });
    },
    /** Multi value specific.  */
    multiValue: function multiValue(styles) {
      return _extends({}, styles, {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal,
        backgroundColor: theme.colors.neutral.lighter,
        borderRadius: theme.radii.xsmall
      });
    },
    multiValueLabel: function multiValueLabel(styles) {
      return _extends({}, styles, {
        fontSize: theme.fontSizes.body,
        color: theme.colors.neutral.dark
      });
    },
    multiValueRemove: function multiValueRemove(styles) {
      return _extends({}, styles, {
        color: theme.colors.neutral.dark,
        ':hover': {
          backgroundColor: theme.colors.neutral.lighter,
          color: theme.colors.neutral.dark
        }
      });
    },
    loadingMessage: function loadingMessage(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary
      });
    },
    noOptionsMessage: function noOptionsMessage(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary
      });
    },
    menu: function menu(styles) {
      return _extends({}, styles, {
        boxShadow: theme.shadows.small
      });
    }
  };
};

// ---------------------------

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