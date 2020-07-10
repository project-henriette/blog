import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ArticleBlock from "../components/article-block"
import ArticleList from "../components/article-list"
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
    <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `space-around`}}>
      {
        ['work', 'craft', 'til'].map(category => (
          <ArticleBlock category={category}>
            <ArticleList data={data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.category === category )}/>
          </ArticleBlock>
        ))
      }
    </div>
    <div style={{ borderTop: `3px solid red`, }}><h4>there be dragons - about</h4></div>
    <div style={{ borderTop: `3px solid pink`, }}><h4>there be footer</h4></div>
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
        }
        fields {
          slug
        }
        fileAbsolutePath
      }
    }
  }
}
`

export default IndexPage
