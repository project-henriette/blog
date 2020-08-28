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
          justifyContent: `flex-end`,
        }}
      >
        <Link to="/about" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          github
        </Link>
        <Link to="/contact" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          instagram
        </Link>
        <Link to="/contact" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          fb
        </Link>
        <Link to="/contact" style={{ color: `black`, textDecoration: `none`, padding: `0 1rem` }}>
          linkedin
        </Link>
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
