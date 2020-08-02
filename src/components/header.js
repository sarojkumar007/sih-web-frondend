import React, {useState, useEffect} from "react"
import M from "materialize-css";
import PropTypes from "prop-types"
import { isAuthenticated } from "../helpers/apicalls"
import { navigate } from "gatsby";

const Header = ({ siteTitle, history }) => {

  const [reload, setReload] = useState(false);

  const logoutAction = (e) => {
    e.preventDefault();
    console.log('logging out');
    localStorage.removeItem('userData');
    setReload(!reload);
    navigate("/")
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems); // options can be added
    return () => {
    }
  }, [reload])

  const links = () => {
    return (
      <>
        <li>
          <a href="/">Home</a>
        </li>
        {isAuthenticated() && true /*isAuthenticated().user.role === 1*/ && (
          <li>
            <a href="/adminDashboard">Admin DashBoard</a>
          </li>
        )}
        {!isAuthenticated() &&
          (<li>
              <a href="/auth">Signin</a>
            </li>
          )}
        {isAuthenticated() && (
          <li>
            <a href="#!" onClick={logoutAction}>Signout</a>
          </li>
        )}
      </>
    )
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper teal darken-1">
          <a href="/" className="brand-logo">{siteTitle}</a>
          <a href="#!" data-target="sih-mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {links()}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="sih-mobile-nav">
        {links()}
      </ul>
    </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
