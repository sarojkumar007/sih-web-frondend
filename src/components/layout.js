import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/materialize.min.css"
import "../css/style.css"
import { Helmet } from "react-helmet"


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* <script src="/materialize.min.js"></script> */}
    </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className=" sih-container">
        <main className="container sih-main">{children}</main>
        <footer>
          Built by <a href="#!">Vigyaan</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
