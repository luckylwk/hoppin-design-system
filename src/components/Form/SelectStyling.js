/**
 * Documentation: https://react-select.com/styles
 */

const getSelectStyles = theme => ({
  control: (styles, { isFocused }) => ({
    ...styles,
    marginTop: '3px',
    padding: '3px 8px',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: theme.radii.small,
    borderColor: isFocused
      ? theme.colors.primary.base
      : theme.colors.neutral.light,
    boxShadow: null,
  }),
  option: (styles, { data, isDisabled, isSelected }) => ({
    ...styles,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.secondary,
    fontWeight: 400,
    backgroundColor: isDisabled
      ? theme.colors.whiteout.lighter
      : isSelected
      ? theme.colors.whiteout.base
      : theme.colors.whiteout.lighter,
    color: isDisabled
      ? theme.colors.neutral.lighter
      : isSelected
      ? theme.colors.neutral.dark
      : theme.colors.neutral.base,
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  input: styles => ({
    ...styles,
    backgroundColor: 'white',
    fontFamily: theme.fonts.secondary,
    fontWeight: theme.fontWeights.normal,
  }),
  placeholder: styles => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    fontWeight: theme.fontWeights.normal,
  }),
  singleValue: styles => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    fontWeight: theme.fontWeights.normal,
  }),
  /** Multi value specific.  */
  multiValue: (styles, { data }) => ({
    ...styles,
    fontFamily: theme.fonts.secondary,
    fontWeight: theme.fontWeights.normal,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: theme.radii.xsmall,
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: theme.fontSizes.body,
    color: theme.colors.neutral.dark,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: theme.colors.neutral.dark,
    ':hover': {
      backgroundColor: theme.colors.neutral.lighter,
      color: theme.colors.neutral.dark,
    },
  }),
});

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
  const baseUnit = 4;
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
