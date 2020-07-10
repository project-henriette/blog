import React from 'react';
// import PropTypes from "prop-types"
import { Link } from "gatsby"

const ArticleList = ( {data} ) => (<div style={{ width: '300px' }}>
    {data.map(({ node }) => (
    <div key={node.id}>
      <Link
        to={node.fields.slug}
      >
      <h4>
        {node.frontmatter.title}{" "}
        
      </h4>
      </Link>
      <h6>— {node.frontmatter.date}</h6>  
      <p>{node.excerpt}</p>
    </div>
  ))}
</div>);

export default ArticleList;