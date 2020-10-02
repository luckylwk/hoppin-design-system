function _templateObject4() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { shadow } from 'styled-system';
import { Flex } from '../Flex'; // ---------------------------

var NavigationBar = styled(Flex)(_templateObject(), shadow);
NavigationBar.propTypes = _extends({}, Flex.propTypes);
NavigationBar.defaultProps = {
  bg: 'whiteout.lightest',
  padding: 'base',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 'nav',
  boxShadow: 'xsmall',
  flexDirection: 'row',
  justifyContent: 'space-between'
};
NavigationBar.displayName = 'NavigationBar'; // ---------------------------

var NavLeft = styled(Flex)(_templateObject2());
NavLeft.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
};
NavLeft.displayName = 'NavLeft'; // ---------------------------

var NavCenter = styled(Flex)(_templateObject3());
NavCenter.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};
NavCenter.displayName = 'NavCenter'; // ---------------------------

var NavRight = styled(Flex)(_templateObject4());
NavRight.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
NavRight.displayName = 'NavRight'; // ---------------------------

export { NavLeft, NavCenter, NavRight };
export default NavigationBar;