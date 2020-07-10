import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ borderBottom: `4px solid #01013a` }}>
    <div
      style={{
        background: `#01013a`,
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
          justifyContent: `flex-end`,
        }}
      >
        <Link to="/about" style={{ color: `white`, textDecoration: `none`, padding: `0 1rem` }}>
          about
        </Link>
        <Link to="/contact" style={{ color: `white`, textDecoration: `none`, padding: `0 1rem` }}>
          contact
        </Link>
        <Link to="/contact" style={{ color: `white`, textDecoration: `none`, padding: `0 1rem` }}>
          fb
        </Link>
        <Link to="/contact" style={{ color: `white`, textDecoration: `none`, padding: `0 1rem` }}>
          linkedin
        </Link>
      </div>

    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, padding: `1rem 0` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontFamily: `Helvetica`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>Quote line about stupidities</h3> 
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
