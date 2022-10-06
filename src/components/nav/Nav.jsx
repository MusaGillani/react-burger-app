import { NavLink } from "react-router-dom";

import { logo } from "../../assets";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-color navbar-dark container-fluid nav-height m-0">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon white"></span>
      </button>
      <a className="navbar-brand mx-1" href="#goes-to-nothing">
        <img src={logo} alt="Burger-logo" width="30" height="24" />
      </a>
      <div
        className="collapse navbar-collapse navbar-nav "
        id="navbarSupportedContent"
      >
        <NavLink
          to="dash"
          className={({ isActive }) =>
            `nav-link white ms-auto ${isActive ? "active" : ""}`
          }
          aria-current="page"
        >
          Burger Builder
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) =>
            `nav-link white ${isActive ? "active" : ""}`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
