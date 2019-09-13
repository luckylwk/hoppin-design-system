var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 100%;\n  width: 1px;\n  background: ', ';\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n'], ['\n  height: 100%;\n  width: 1px;\n  background: ', ';\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var Separator = styled.div(_templateObject, function (props) {
  return props.theme.props.theme.colors.whiteout.lightest;
});

export default Separator;