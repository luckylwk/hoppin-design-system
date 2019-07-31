let colors = {
  white: '#FFF',
  black: '#050505',
  // shades, uniformly greenish, generated at https://www.colorbox.io/#steps=6#hue_start=175#hue_end=184#hue_curve=easeInOutSine#sat_start=26#sat_end=96#sat_curve=easeInOutQuad#sat_rate=51#lum_start=95#lum_end=21#lum_curve=linear#lock_hex=44E2D6#minor_steps_map=0
  // for more contrast, more blue in the darks, generally closer to current design use values at:
  // https://www.colorbox.io/#steps=6#hue_start=173#hue_end=211#hue_curve=easeInOutQuad#sat_start=18#sat_end=82#sat_curve=easeInOutQuad#sat_rate=51#lum_start=99#lum_end=21#lum_curve=linear#lock_hex=44E2D6#minor_steps_map=0
  hopper: {
    lightest: '#d2f2f0',
    lighter: '#abf3ed',
    light: '#84f4e9',
    base: '#44e2d6',
    dark: '#37a9a7',
    darker: '#2b6c6f',
    darkest: '#1b3436',
  },
  // shades generated at: https://www.colorbox.io/#steps=6#hue_start=336#hue_end=336#hue_curve=easeInQuad#sat_start=4#sat_end=96#sat_curve=easeOutQuad#sat_rate=130#lum_start=100#lum_end=28#lum_curve=easeOutQuad#lock_hex=FF0467#minor_steps_map=0
  host: {
    lightest: '#fff2f7',
    lighter: '#ffb1d2',
    light: '#ff6eab',
    base: '#ff0467',
    dark: '#d40054',
    darker: '#94003b',
    darkest: '#47001d',
  },
  // secondary: '#8740DE', not really used at the moment, but make it accessible.
  secondary: {
    base: '#8740DE',
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

  // shades from https://www.colorbox.io/#steps=6#hue_start=200#hue_end=210#hue_curve=easeInOutSine#sat_start=5#sat_end=78#sat_curve=linear#sat_rate=86#lum_start=100#lum_end=20#lum_curve=linear#lock_hex=243b53#minor_steps_map=0
  // more grey shades generated at: https://www.colorbox.io/#steps=6#hue_start=200#hue_end=201#hue_curve=easeInOutSine#sat_start=27#sat_end=10#sat_curve=easeInOutQuad#sat_rate=51#lum_start=100#lum_end=20#lum_curve=linear#lock_hex=#f8fafb#minor_steps_map=0
  neutral: {
    lightest: '#f4fbff',
    lighter: '#cfe0e9',
    light: '#adc5d3',
    base: '#7593a8',
    dark: '#47647e',
    darker: '#243b53',
    darkest: '#112233',
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

// set default "primary" to hopper colors:
colors.primary = colors.hopper;

// define color contexts (like dark and light, in our case hopper and host contexts)
// https://styled-system.com/guides/color-modes (they call it modes, we call it context to keep it consistent with components-level overrrides (see Button))
colors.contexts = {
  host: {
    primary: colors.host,
  },
  hopper: {
    primary: colors.hopper,
  },
};

export { colors };
