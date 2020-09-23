"use strict";

exports.__esModule = true;
exports["default"] = isModKey;

/**
 * Detect Cmd or Ctrl by platform for keyboard shortcuts
 */
function isModKey(event) {
  var isMac = typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  return isMac ? event.metaKey : event.ctrlKey;
}

module.exports = exports.default;