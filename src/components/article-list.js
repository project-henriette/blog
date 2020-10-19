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
      <h2 style={{ color: '#000000', padding: '3rem 1rem 1rem 1rem' }}>
        {node.frontmatter.title}{" "}
      </h2>
      
      <h5 style={{ padding: '0.5rem 1rem' }}>— {node.frontmatter.date}</h5>  
      <p style={{ padding: '0.5rem 1rem' }}>{node.excerpt}</p>
      <Link
        style={{ textDecoration: 'none', color: '#8f53b2' }}
        to={node.fields.slug}
      >
        <p style={{ textAlign: 'center' }}>Read full post...</p>
      </Link>
    </div>
  )})}
</div>);

export default ArticleList;