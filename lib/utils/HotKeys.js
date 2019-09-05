'use strict';

exports.__esModule = true;

var _isHotkey = require('is-hotkey');

var _isHotkey2 = _interopRequireDefault(_isHotkey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HotKeys = function () {
  function HotKeys(handlers) {
    var _this = this;

    _classCallCheck(this, HotKeys);

    this.eventHandler = this._capture.bind(this, false);
    this.handlers = {};

    Object.keys(handlers || {}).forEach(function (key) {
      _this.on(key, handlers[key]);
    });
  }

  HotKeys.prototype._capture = function _capture(allowDefaultHandlers, event) {
    var _this2 = this;

    // eslint-disable-next-line array-callback-return
    Object.keys(this.handlers).some(function (key) {
      if (_this2.handlers[key].hotKey(event)) {
        if (!allowDefaultHandlers) {
          event.preventDefault();
        }

        _this2.handlers[key].callback(event);

        return true;
      }
    });
  };

  HotKeys.prototype.addListener = function addListener() {
    window.addEventListener('keydown', this.eventHandler);
  };

  HotKeys.prototype.capture = function capture(allowDefaultHandlers) {
    return this._capture.bind(this, allowDefaultHandlers);
  };

  HotKeys.prototype.on = function on(key, callback) {
    this.handlers[key] = {
      callback: callback,
      hotKey: (0, _isHotkey2.default)(key)
    };
  };

  HotKeys.prototype.removeListener = function removeListener() {
    window.removeEventListener('keydown', this.eventHandler);
  };

  return HotKeys;
}();

exports.default = HotKeys;
module.exports = exports['default'];