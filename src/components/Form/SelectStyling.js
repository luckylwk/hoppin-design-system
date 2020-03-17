/**
 * Documentation: https://react-select.com/styles
 */

const getSelectStyles = theme => ({
  control: (styles, props) => {
    const {
      isFocused, //hasValue
    } = props;
    return {
      ...styles,
      marginTop: '4px',
      padding: '1px 8px',
      backgroundColor: theme.colors.whiteout.light,
      borderWidth: theme.borderWidths.base,
      borderRadius: isFocused
        ? `${theme.radii.small} ${theme.radii.small} 0 0`
        : theme.radii.small,
      borderColor: isFocused
        ? theme.colors.primary.base
        : theme.colors.whiteout.dark,
      ':hover': {
        borderColor: isFocused
          ? theme.colors.primary.base
          : theme.colors.whiteout.dark,
      },
      boxShadow: null,
      minHeight: '2rem',
      lineHeight: 1,
    };
  },
  menu: styles => {
    return {
      ...styles,
      marginTop: `0`,
      border: `${theme.borderWidths.base} solid ${theme.colors.primary.base}`,
      borderTop: '0px',
      borderRadius: `0 0 ${theme.radii.small} ${theme.radii.small}`,
      boxShadow: theme.shadows.small,
    };
  },
  menuList: styles => {
    return { ...styles };
  },
  option: (styles, props) => {
    const { isDisabled, isSelected } = props;
    return {
      ...styles,
      padding: `${theme.space.small} ${theme.space.base}`,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.secondary,
      fontWeight: theme.fontWeights.normal,
      backgroundColor: isDisabled
        ? theme.colors.whiteout.light
        : isSelected
        ? theme.colors.whiteout.dark
        : theme.colors.whiteout.light,
      color: isDisabled
        ? theme.colors.neutral.light
        : isSelected
        ? theme.colors.neutral.darker
        : theme.colors.neutral.base,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':hover': {
        backgroundColor: theme.colors.whiteout.dark,
        color: theme.colors.primary.darker,
        cursor: 'pointer',
        fontWeight: theme.fontWeights.normal,
      },
    };
  },
  input: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: theme.colors.whiteout.light,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.secondary,
      fontWeight: theme.fontWeights.normal,
      borderColor: isFocused
        ? theme.colors.primary.base
        : theme.colors.whiteout.dark,
    };
  },
  valueContainer: styles => {
    return { ...styles, padding: '2.5px' };
  },
  placeholder: styles => {
    return {
      ...styles,
      fontFamily: theme.fonts.secondary,
      fontSize: theme.fontSizes.body,
      fontWeight: theme.fontWeights.normal,
      color: theme.colors.neutral.base,
    };
  },
  singleValue: styles => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  }),
  /** Multi value specific.  */
  multiValue: styles => ({
    ...styles,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.secondary,
    fontWeight: theme.fontWeights.normal,
    backgroundColor: theme.colors.whiteout.darkest,
    borderRadius: theme.radii.xsmall,
  }),
  multiValueLabel: styles => ({
    ...styles,
    fontSize: theme.fontSizes.body,
    color: theme.colors.neutral.dark,
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: theme.colors.neutral.dark,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.colors.neutral.lighter,
      color: theme.colors.neutral.dark,
    },
  }),
  /*  */
  loadingMessage: styles => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    color: theme.colors.neutral.light,
  }),
  noOptionsMessage: styles => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    color: theme.colors.neutral.light,
  }),
});

// ---------------------------

const getSelectTheme = theme => {
  const colors = {
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
    neutral90: theme.colors.neutral.darkest,
  };

  const borderRadius = theme.radii.small;
  // Used to calculate consistent margin/padding on elements
  const baseUnit = 5;
  // The minimum height of the control
  const controlHeight = 38;
  // The amount of space between the control and menu */
  const menuGutter = baseUnit * 2;

  const spacing = {
    baseUnit,
    controlHeight,
    menuGutter,
  };

  return {
    borderRadius,
    colors,
    spacing,
  };
};

export { getSelectTheme, getSelectStyles };

export default theme => ({
  styles: getSelectStyles(theme),
  theme: getSelectTheme(theme),
});
