import Color from 'color';

let colors = {
  white: '#FFF',
  black: '#050505',

  yellow: '#FFCC00',
  orange: '#FF5936',
  cyan: '#3ADADA',
  sky: '#008CE6',
  indigo: '#03033B',
  mutedBlue: '#96C9DB',

  primary: {
    lightest: '#FFF', //made up
    lighter: '#FFCC00',
    light: '#FFCC00',
    base: '#FF5936',
    dark: '#FF5936',
    darker: '#03033B',
    darkest: '#03033B', // made up
  },

  secondary: {
    lightest: '#3ADADA', //made up
    lighter: '#3ADADA',
    light: '#008CE6',
    base: '#008CE6',
    dark: '#03033B',
    darker: '#03033B',
    darkest: '#03033B', // made up
  },

  neutral: {
    lightest: '#FFF', //made up
    lighter: '#FFF',
    light: '#F5F5F5',
    base: '#DEDEDE',
    dark: '#96C9DB',
    darker: '#4E4E4E',
    darkest: '#050505', // made up
  },

  danger: {
    lightest: '#FAE6E6',
    lighter: '#F3A9A9',
    light: '#E46564',
    base: '#DC3030',
    dark: '#B82020',
    darker: '#881B1B',
    darkest: '#601919',
  },

  // colors from https://www.colorbox.io/#steps=6#hue_start=33#hue_end=33#hue_curve=easeInOutSine#sat_start=11#sat_end=100#sat_curve=linear#sat_rate=186#lum_start=100#lum_end=43#lum_curve=easeOutQuad#minor_steps_map=0
  warning: {
    lightest: '#ffe8cb',
    lighter: '#fcd29f',
    light: '#f9bd73',
    base: '#ea8e1f',
    dark: '#ce7100',
    darker: '#a35a00',
    darkest: '#6e3c00',
  },

  // info colors based off of tertiary above https://www.colorbox.io/#steps=6#hue_start=200#hue_end=210#hue_curve=easeInOutSine#sat_start=25#sat_end=78#sat_curve=linear#sat_rate=86#lum_start=100#lum_end=22#lum_curve=linear#lock_hex=038CFA#minor_steps_map=0
  info: {
    lightest: '#c8edff',
    lighter: '#8dd9ff',
    light: '#4fc1ff',
    base: '#038cfa',
    dark: '#166ab9',
    darker: '#1b4979',
    darkest: '#122538',
  },

  // https://www.colorbox.io/#steps=6#hue_start=28#hue_end=43#hue_curve=easeInOutSine#sat_start=27#sat_end=12#sat_curve=easeInOutQuad#sat_rate=0#lum_start=100#lum_end=94#lum_curve=easeInQuad#lock_hex=f7f7f7#minor_steps_map=0
  whiteout: {
    lightest: '#ffffff',
    lighter: '#fdfdfd',
    light: '#fbfbfb',
    base: '#f7f7f7',
    dark: '#f3f3f3',
    darker: '#f1f1f1',
    darkest: '#f0f0f0',
  },
};

colors = {
  ...colors,
  form: {
    background: colors.whiteout.lighter,
    border: colors.whiteout.darkest,
    placeholder: Color(colors.neutral.darker).alpha('0.65').rgb().string(),
    required: Color(colors.orange).alpha('0.75').rgb().string(),
    focused: {
      background: colors.whiteout.lightest,
      border: colors.sky,
    },
  },
};

export { colors };
