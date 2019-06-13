var colors = {
  white: '#FFF',
  black: '#050505',
  hopper: '#44E2D6',
  // shades, uniformly greenish, generated at https://www.colorbox.io/#steps=6#hue_start=175#hue_end=184#hue_curve=easeInOutSine#sat_start=26#sat_end=96#sat_curve=easeInOutQuad#sat_rate=51#lum_start=95#lum_end=21#lum_curve=linear#lock_hex=44E2D6#minor_steps_map=0
  // for more contrast, more blue in the darks, generally closer to current design use values at: 
  // https://www.colorbox.io/#steps=6#hue_start=173#hue_end=211#hue_curve=easeInOutQuad#sat_start=18#sat_end=82#sat_curve=easeInOutQuad#sat_rate=51#lum_start=99#lum_end=21#lum_curve=linear#lock_hex=44E2D6#minor_steps_map=0
  hoppers: {
    lightest: '#d2f2f0',
    lighter: '#abf3ed',
    light: '#84f4e9',
    base: '#44e2d6',
    dark: '#37a9a7',
    darker: '#2b6c6f',
    darkest: '#1b3436'
  },
  host: '#FF0467',
  // shades generated at: https://www.colorbox.io/#steps=6#hue_start=336#hue_end=336#hue_curve=easeInQuad#sat_start=4#sat_end=96#sat_curve=easeOutQuad#sat_rate=130#lum_start=100#lum_end=28#lum_curve=easeOutQuad#lock_hex=FF0467#minor_steps_map=0
  hosts: {
    lightest: '#fff2f7',
    lighter: '#ffb1d2',
    light: '#ff6eab',
    base: '#ff0467',
    dark: '#d40054',
    darker: '#94003b',
    darkest: '#47001d'
  },
  secondary: '#8740DE',
  tertiary: '#038CFA',

  danger: 'darkred',
  warning: 'orange',
  info: 'blue',

  // shades from https://www.colorbox.io/#steps=6#hue_start=200#hue_end=210#hue_curve=easeInOutSine#sat_start=5#sat_end=78#sat_curve=linear#sat_rate=86#lum_start=100#lum_end=20#lum_curve=linear#lock_hex=243b53#minor_steps_map=0
  // more grey shades generated at: https://www.colorbox.io/#steps=6#hue_start=200#hue_end=201#hue_curve=easeInOutSine#sat_start=27#sat_end=10#sat_curve=easeInOutQuad#sat_rate=51#lum_start=100#lum_end=20#lum_curve=linear#lock_hex=#f8fafb#minor_steps_map=0
  neutrals: {
    lightest: '#f4fbff',
    lighter: '#cfe0e9',
    light: '#adc5d3',
    base: '#7593a8',
    dark: '#47647e',
    darker: '#243b53',
    darkest: '#112233'
  }
};

// set default "primary" to hopper colors:
colors.primary = colors.hopper;
colors.primaries = colors.hoppers;

// define color modes (like dark and light, in our case hopper and host modes)
// https://styled-system.com/guides/color-modes
colors.modes = {
  host: {
    primary: colors.host,
    primaries: colors.hosts
  },
  hopper: {
    primary: colors.hopper,
    primaries: colors.hoppers
  }
};

export default colors;