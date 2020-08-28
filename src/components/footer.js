import React from "react"

const Footer = () => (
  <footer>
    <div style={{
      margin: `0px auto`,
      padding: `1rem`,
      maxWidth: `960px`,
      borderTop: `2px solid black`
    }}><h4>there be footer</h4></div>
    Natali Mikesova © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
