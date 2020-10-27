import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
/* import ArticleHeading from '../components/article-heading'; */
import ArticleList from "../components/article-list"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
/*   const tags = ['ink', 'knitting']; */
  return (<Layout>
    <SEO title="Home" />
    <div style={{
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      margin: `0px auto`,
      maxWidth: `960px`,
      }}
    >
      {/* hidden space for inserting subheader for tag filtering to add later */}
      {/*
        tags.map(tag => (
          <ArticleHeading tag={tag}/>
        ))
        */}
    </div>
    <ArticleList data={data.allMarkdownRemark.edges}/>
    <About/>  
  </Layout>
);
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {headings: {}, frontmatter: {}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 300)
        frontmatter {
          title
          tags
          date
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default IndexPage
