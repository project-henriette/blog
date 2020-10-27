import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div 
        style={{
        padding: `1rem`
      }}>
        <h1
          style={{ textAlign: 'left', color: '#000000', padding: '2rem 1rem' }}
        >{post.frontmatter.title}</h1>
        <div style={{ padding: `1rem` }}>
          {
            post.frontmatter.featuredImage ?
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} /> :
            ''
          }
        </div>
        <div style={{ padding: '1rem' }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
  `