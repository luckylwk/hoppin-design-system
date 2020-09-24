"use strict";

exports.__esModule = true;
exports.mediaQueries = exports.breakpoints = exports.zIndices = exports.radii = exports.containerWidths = exports.space = void 0;
// based on 16px = 1em:
var space = [0, '.25rem', // 4px
'.5rem', // 8px
'1rem', // 16px
'1.5rem', // 24px
'3rem', // 32px
'6rem', // 96px
'10rem' // 160px
];
exports.space = space;
space.none = space[0];
space.xsmall = space[1];
space.small = space[2];
space.base = space[3];
space.medium = space[3];
space.large = space[4];
space.xlarge = space[5];
space.huge = space[6];
var containerWidths = {
  narrow: '50rem',
  base: '70rem',
  full: '100%'
};
exports.containerWidths = containerWidths;
containerWidths.normal = containerWidths.base;
var radii = [0, space.xsmall, space.small, space.base, space.large, '100%'];
exports.radii = radii;
radii.none = radii[0];
radii.xsmall = radii[1];
radii.small = radii[2];
radii.medium = radii[3];
radii.base = radii[3];
radii.large = radii[4];
radii.xlarge = radii[5];
var zIndices = [0, 15, 150, 1500, 15000, 50000];
exports.zIndices = zIndices;
zIndices.farBack = -zIndices[3];
zIndices.back = -zIndices[1];
zIndices.base = zIndices[0];
zIndices.front = zIndices[3];
zIndices.nav = zIndices[4];
zIndices.overlay = zIndices[5]; // breakpoints are mobile-first use no breakpoint to target phones and up

var breakpoints = ['40em', '52em', '64em'];
exports.breakpoints = breakpoints;
breakpoints.small = breakpoints[0]; // tablets

breakpoints.medium = breakpoints[1]; // large tablets, desktop

breakpoints.large = breakpoints[2]; // big screens

var mediaQueries = ["@media screen and (min-width: " + breakpoints[0] + ")", "@media screen and (min-width: " + breakpoints[1] + ")", "@media screen and (min-width: " + breakpoints[2] + ")"];
exports.mediaQueries = mediaQueries;
mediaQueries.small = mediaQueries[0]; // tablets

mediaQueries.medium = mediaQueries[1]; // large tablets, desktop

mediaQueries.large = mediaQueries[2]; // big screens