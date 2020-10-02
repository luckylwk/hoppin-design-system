"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _Box = require("../Box");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ", ";\n\n  ", "\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: '';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ", " ", " infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  100% {\n    transform: translateX(100%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var loadingKeyframes = (0, _styledComponents.keyframes)(_templateObject()); // ---------------------------

var Skeleton = (0, _styledComponents["default"])(_Box.Box)(_templateObject2(), function (_ref) {
  var width = _ref.width;
  return width;
}, (0, _styledSystem.variant)({
  prop: 'ratio',
  variants: {
    '4/5': {
      paddingTop: '125%'
    },
    '1/1': {
      paddingTop: '100%'
    },
    '3/2': {
      paddingTop: '66%'
    },
    '4/3': {
      paddingTop: '75%'
    },
    text: {
      paddingTop: '20px'
    },
    title: {
      paddingTop: '26px'
    }
  }
}), loadingKeyframes, function (_ref2) {
  var delay = _ref2.delay;
  return delay;
});
Skeleton.propTypes = {
  ratio: _propTypes["default"].string,
  borderRadius: _propTypes["default"].string,
  width: _propTypes["default"].string,
  delay: _propTypes["default"].string
};
Skeleton.defaultProps = {
  ratio: '3/2',
  borderRadius: '3px',
  width: '100%',
  delay: '1.5s'
};
Skeleton.displayName = 'Skeleton';
var _default = Skeleton;
exports["default"] = _default;
module.exports = exports.default;