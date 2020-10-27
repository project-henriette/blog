import React from "react"

const Footer = () => (
  <footer>
    <div style={{
      margin: `0px auto`,
      padding: `1rem`,
      maxWidth: `960px`,
      borderTop: `2px solid black`,
    }}>
      <h4>there be footer</h4>
      <p>One day I will decide what needs to be put into my footer of the page, but for now I have no idea. Dragons?</p>
    </div>
    <div style={{
      margin: `0px auto`,
      padding: `0.5rem`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`
    }}>
      <p style={{ fontSize: `0.8rem`}}>Natalie Mikesova © {new Date().getFullYear()}, Built with </p>
      <a style={{ fontSize: `0.8rem`, paddingLeft: `5px` }} href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
