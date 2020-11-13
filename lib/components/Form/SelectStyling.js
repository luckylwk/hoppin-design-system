"use strict";

exports.__esModule = true;
exports["default"] = exports.getSelectStyles = exports.getSelectTheme = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Documentation: https://react-select.com/styles
 */
var getSelectStyles = function getSelectStyles(theme) {
  return {
    control: function control(styles, props) {
      var isFocused = props.isFocused;
      return _extends({}, styles, {
        marginTop: theme.space.small,
        padding: '1px 8px',
        backgroundColor: theme.colors.form.background,
        borderWidth: theme.borderWidths.base,
        borderRadius: isFocused ? theme.radii.small + " " + theme.radii.small + " 0 0" : theme.radii.small,
        borderColor: isFocused ? theme.colors.form.focused.border : theme.colors.form.border,
        ':hover': {
          borderColor: isFocused ? theme.colors.form.focused.border : theme.colors.form.border
        },
        boxShadow: null,
        minHeight: '2rem',
        lineHeight: 1
      });
    },
    menu: function menu(styles) {
      return _extends({}, styles, {
        marginTop: "0",
        border: theme.borderWidths.base + " solid " + theme.colors.form.focused.border,
        borderTop: '0px',
        borderRadius: "0 0 " + theme.radii.small + " " + theme.radii.small,
        boxShadow: theme.shadows.small
      });
    },
    menuList: function menuList(styles) {
      return _extends({}, styles);
    },
    option: function option(styles, props) {
      var isDisabled = props.isDisabled,
          isSelected = props.isSelected;
      return _extends({}, styles, {
        padding: theme.space.small + " " + theme.space.base,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal,
        backgroundColor: isDisabled ? theme.colors.whiteout.light : isSelected ? theme.colors.whiteout.dark : theme.colors.whiteout.light,
        color: isDisabled ? theme.colors.neutral.base : isSelected ? theme.colors.form.focused.border : theme.colors.neutral.darker,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':hover': {
          backgroundColor: theme.colors.whiteout.dark,
          color: theme.colors.primary.darkest,
          cursor: 'pointer',
          fontWeight: theme.fontWeights.normal
        }
      });
    },
    input: function input(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _extends({}, styles, {
        backgroundColor: theme.colors.form.background,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.secondary,
        fontWeight: theme.fontWeights.normal,
        borderColor: isFocused ? theme.colors.form.focused.border : theme.colors.form.border
      });
    },
    valueContainer: function valueContainer(styles) {
      return _extends({}, styles, {
        padding: '2.5px'
      });
    },
    placeholder: function placeholder(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.form.placeholder
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
        backgroundColor: theme.colors.form.background,
        borderRadius: theme.radii.xsmall
      });
    },
    multiValueLabel: function multiValueLabel(styles) {
      return _extends({}, styles, {
        fontSize: theme.fontSizes.body,
        color: theme.colors.form.focused.border
      });
    },
    multiValueRemove: function multiValueRemove(styles) {
      return _extends({}, styles, {
        color: theme.colors.form.focused.border,
        cursor: 'pointer',
        ':hover': {
          backgroundColor: theme.colors.neutral.lighter,
          color: theme.colors.form.focused.border
        }
      });
    },

    /*  */
    loadingMessage: function loadingMessage(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        color: theme.colors.neutral.light
      });
    },
    noOptionsMessage: function noOptionsMessage(styles) {
      return _extends({}, styles, {
        fontFamily: theme.fonts.secondary,
        color: theme.colors.neutral.light
      });
    }
  };
}; // ---------------------------


exports.getSelectStyles = getSelectStyles;

var getSelectTheme = function getSelectTheme(theme) {
  var colors = {
    primary: theme.colors.neutral.dark,
    primary75: theme.colors.primary.dark,
    primary50: theme.colors.primary.dark,
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
  var borderRadius = theme.radii.small; // Used to calculate consistent margin/padding on elements

  var baseUnit = 5; // The minimum height of the control

  var controlHeight = 38; // The amount of space between the control and menu */

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

exports.getSelectTheme = getSelectTheme;

var _default = function _default(theme) {
  return {
    styles: getSelectStyles(theme),
    theme: getSelectTheme(theme)
  };
};

exports["default"] = _default;