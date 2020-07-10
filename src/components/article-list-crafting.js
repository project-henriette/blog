import React from 'react';
// import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

const ArticleListCrafting = ({ data }) => (
  <div  style={{ width: '300px' }}>
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

export const data = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {headings: {}, frontmatter: {}, fileAbsolutePath: {regex: "/crafting/"}}) {
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

export default ArticleListCrafting;