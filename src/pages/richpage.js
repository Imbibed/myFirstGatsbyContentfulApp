import React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichPage(props) {
  const pastry = props.data.contentfulRichData.data.data;
  const document = {
    nodeType: 'document',
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Hello',
            marks: [{ type: 'bold' }],
          },
          {
            nodeType: 'text',
            value: ' world!',
            marks: [{ type: 'italic' }],
          },
        ],
      },
    ],
  };
  const Bold = ({ children }) => <span className="bold">{children}</span>;

  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  return (
    <>
    {documentToReactComponents(document, options)}
    </>
  )
}

export default RichPage;