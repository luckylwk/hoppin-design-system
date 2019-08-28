import React from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';
import { OrderedList, UnorderedList, ListItem } from '../List';
import MarkdownImage from './MarkdownImage';

/*
 * Use the unified ecosystem to parse Markdown
 * https://unified.js.org/
 */

import unified from 'unified';
import markdown from 'remark-parse';
import githubBreak from 'remark-github-break';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

const H1 = props => <Heading as="h1" {...props} />;
const H2 = props => <Heading as="h2" {...props} />;
const H3 = props => <Heading as="h3" {...props} />;
const H4 = props => <Heading as="h4" {...props} />;
const H5 = props => <Heading as="h5" {...props} />;
const H6 = props => <Heading as="h6" {...props} />;
const ALink = props => <Link as="a" {...props} />;

var processor = unified()
  .use(markdown)
  .use(githubBreak)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    components: {
      a: ALink,
      p: Paragraph,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      img: MarkdownImage,
      ol: OrderedList,
      ul: UnorderedList,
      li: ListItem,
    },
  });

const Markdown = ({ children }) => {
  return (
    <React.Fragment>
      {children && processor.processSync(children).contents}
    </React.Fragment>
  );
};

Markdown.displayName = 'Markdown';
export default Markdown;
