import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        background: `#ffffff`,
        width: `100%`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          width: `100%`,
          padding: `0.65rem 1.0875rem`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <Link to="#about" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
            About
          </Link>  
        </div>
        <div>
        <a href="https://www.instagram.com/natalie_mikesova/?hl=en" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          instagram
        </a>
        <a href="https://www.facebook.com/ZenOfMaking" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          fb
        </a>
{/*         <Link to="/contact" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          linkedin
        </Link> */}

        </div>
      </div>

    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
        borderBottom: `2px solid black`
      }}
    >
      <h1 style={{ margin: 0, padding: `1rem 0` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{ fontSize: `1.2rem`, color: '#331147'}}>About the little pleasures of creating whatever</h3> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
