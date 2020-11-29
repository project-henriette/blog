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
        padding: `2rem`
      }}>
        <h1
          style={{ textAlign: 'left', color: '#000000', padding: '2rem 1rem 1rem 1rem' }}
        >{post.frontmatter.title}</h1>
        {
          post.frontmatter.subtitle ?
            <h2 style={{ textAlign: 'left', color: '#000000', padding: '0rem 1rem' }}>
              {post.frontmatter.subtitle}
            </h2> :
            ""
        }
        <h5 style={{ padding: '0.5rem 1rem' }}>— {post.frontmatter.date}</h5>
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
        subtitle
        tags
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `