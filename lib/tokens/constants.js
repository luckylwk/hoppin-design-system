'use strict';

exports.__esModule = true;
// Format of dates provided by the backend.
var DATETIME_FORMAT = exports.DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';
var DATEISO_FORMAT = exports.DATEISO_FORMAT = 'YYYY-MM-DD';

//
var DATE_FORMATTING = exports.DATE_FORMATTING = 'dddd MMMM Do';
var DATEMETA_FORMATTING = exports.DATEMETA_FORMATTING = 'LLLL';

var constants = {
  DATEISO_FORMAT: DATEISO_FORMAT,
  DATE_FORMATTING: DATE_FORMATTING,
  DATETIME_FORMAT: DATETIME_FORMAT,
  DATEMETA_FORMATTING: DATEMETA_FORMATTING
};

exports.default = constants;