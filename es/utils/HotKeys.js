function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import isHotkey from 'is-hotkey';

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
      hotKey: isHotkey(key)
    };
  };

  HotKeys.prototype.removeListener = function removeListener() {
    window.removeEventListener('keydown', this.eventHandler);
  };

  return HotKeys;
}();

export default HotKeys;