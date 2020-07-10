import React from 'react';
import PropTypes from "prop-types"

import ArticleHeading from './article-heading';

const ArticleBlock = ({category, data, children}) => {
  console.log('block', data);
  return (
    <div style={{
      padding: `0.5rem`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`
    }}>
      <ArticleHeading category={category} data={data}/>
      {children}
    </div>
  );
};

ArticleBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ArticleBlock;