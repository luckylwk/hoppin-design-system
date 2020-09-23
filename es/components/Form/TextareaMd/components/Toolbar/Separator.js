function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: 1px;\n  background: ", ";\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
var Separator = styled.div(_templateObject(), function (props) {
  return props.theme.props.theme.colors.whiteout.lightest;
});
export default Separator;