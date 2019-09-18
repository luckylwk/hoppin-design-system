// From https://github.com/outline/rich-markdown-editor/blob/2bf3d7a2c111175d3d95b94bc3957535d7c44b6d/src/plugins/Chrome.js
// check repo for more Chrome (insert block, TOC,...)
import React, { Fragment } from 'react';
import Toolbar from '../components/Toolbar';

function ChromePlugin() {
  function renderEditor(props, editor, next) {
    const children = next();

    return (
      <Fragment>
        {!props.readOnly && <Toolbar value={editor.value} editor={editor} />}
        {children}
      </Fragment>
    );
  }

  return { renderEditor };
}

export default ChromePlugin;
