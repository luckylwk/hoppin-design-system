function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  flex: 0;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-left: 10px;\n  border: none;\n  background: none;\n  transition: opacity 100ms ease-in-out;\n  padding: 0;\n  opacity: 0.7;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
export default styled.button(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active && 'opacity: 1;';
});