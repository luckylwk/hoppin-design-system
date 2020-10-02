function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkStyled from './LinkStyled'; // Logic from https://bit.dev/grommet/grommet/routed-button/~code#components/RoutedButton/RoutedButton.js

var RoutedLinkStyled = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RoutedLinkStyled, _Component);

  function RoutedLinkStyled() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          method = _this$props.method,
          onClick = _this$props.onClick,
          to = _this$props.to;
      var router = _this.context.router;

      if (event) {
        var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the button we should let it go

        if (modifierKey) {
          return;
        }
      }

      if (router) {
        event.preventDefault();
        (router.history || router)[method](to);
      }

      if (onClick) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onClick.apply(void 0, [event].concat(args));
      }
    });

    return _this;
  }

  var _proto = RoutedLinkStyled.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        href = _this$props2.href,
        to = _this$props2.to,
        method = _this$props2.method,
        onClick = _this$props2.onClick,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["href", "to", "method", "onClick"]);

    return /*#__PURE__*/React.createElement(LinkStyled, _extends({}, rest, {
      href: to || href,
      disabled: !to && !onClick,
      onClick: this.onClick
    }));
  };

  return RoutedLinkStyled;
}(Component);

_defineProperty(RoutedLinkStyled, "contextTypes", {
  router: PropTypes.shape({}).isRequired
});

_defineProperty(RoutedLinkStyled, "defaultProps", {
  method: 'push'
});

RoutedLinkStyled.displayName = 'RoutedLinkStyled';
export default RoutedLinkStyled;