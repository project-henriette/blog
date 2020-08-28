import React from 'react';
// import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

const ArticleListTIL = ({ data }) => {
  console.log('is this showed somewhere?', data);
  return (
  <div style={{ width: '300px' }}>
    {data.map(({ node }) => (
    <div key={node.id}>
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
  ))}
</div>);
}

export const data = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {headings: {}, frontmatter: {}, fileAbsolutePath: {regex: "/til/"}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`

export default ArticleListTIL;