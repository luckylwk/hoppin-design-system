"use strict";

exports.__esModule = true;
exports["default"] = exports.DATEMETA_FORMATTING = exports.DATE_FORMATTING = exports.DATEISO_FORMAT = exports.DATETIME_FORMAT = void 0;
// Format of dates provided by the backend.
var DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';
exports.DATETIME_FORMAT = DATETIME_FORMAT;
var DATEISO_FORMAT = 'YYYY-MM-DD'; //

exports.DATEISO_FORMAT = DATEISO_FORMAT;
var DATE_FORMATTING = 'dddd MMMM Do';
exports.DATE_FORMATTING = DATE_FORMATTING;
var DATEMETA_FORMATTING = 'LLLL';
exports.DATEMETA_FORMATTING = DATEMETA_FORMATTING;
var constants = {
  DATEISO_FORMAT: DATEISO_FORMAT,
  DATE_FORMATTING: DATE_FORMATTING,
  DATETIME_FORMAT: DATETIME_FORMAT,
  DATEMETA_FORMATTING: DATEMETA_FORMATTING
};
var _default = constants;
exports["default"] = _default;