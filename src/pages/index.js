import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ArticleHeading from '../components/article-heading';
import ArticleList from "../components/article-list"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (<Layout>
    <SEO title="Home" />
    {/* <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <p>by {data.site.siteMetadata.author}</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div style={{
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      margin: `0px auto`,
      maxWidth: `960px`,
      borderBottom: `2px solid black`
      }}
    >
      {
        ['work', 'craft', 'til'].map(category => (
          <ArticleHeading category={category}/>
        ))
      }
    </div>
    <ArticleList data={data.allMarkdownRemark.edges}/>
    <About/>  
  </Layout>
);
}

export const query = graphql`
query {

  allMarkdownRemark(filter: {headings: {}, frontmatter: {}}) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          category
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
