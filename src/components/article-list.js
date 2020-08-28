import React from 'react';
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const ArticleList = ( {data} ) => (<div style={{ padding: `1rem`}}>
    {data.map(({ node }) => {
    console.log("node", node);
    return(
    <div
      key={node.id}
      style={{
        padding: `1rem`
      }}
    >
      {
       node.frontmatter.featuredImage ?
       <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} /> :
       ''
      } 
      
      <Link
        style={{ textAlign: 'center' }}
        to={node.fields.slug}
      >
      <h4 style={{ textAlign: 'center' }}>
        {node.frontmatter.title}{" "}
        
      </h4>
      </Link>
      <h6 style={{ textAlign: 'center' }}>— {node.frontmatter.date}</h6>  
      <p style={{ textAlign: 'center' }}>{node.excerpt}</p>
    </div>
  )})}
</div>);

export default ArticleList;