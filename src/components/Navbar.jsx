import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Website Name Left */}
        <NavLink className="navbar-brand" to="/">
          Dr. Usman Attique
        </NavLink>

        {/* Hamburger toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pillNav2"
          aria-controls="pillNav2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Pills navigation - collapsible */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="pillNav2"
        >
          <ul
            className="nav nav-pills gap-2 p-1 small bg-primary rounded-5 shadow-sm mobile-nav-fix"
            role="tablist"
            style={{
              marginLeft: "auto",
              width: "60%", // Desktop width unchanged
              display: "flex",
              justifyContent: "space-evenly",
              "--bs-nav-link-color": "var(--bs-white)",
              "--bs-nav-pills-link-active-color": "var(--bs-primary)",
              "--bs-nav-pills-link-active-bg": "var(--bs-white)",
            }}
          >
            <li className="nav-item" role="presentation">
              <NavLink
                className={({ isActive }) =>
                  "nav-link w-100 text-center rounded-0 rounded-lg-5 " +
                  (isActive ? "active" : "")
                }
                to="/"
                role="tab"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className={({ isActive }) =>
                  "nav-link w-100 text-center rounded-0 rounded-lg-5 " +
                  (isActive ? "active" : "")
                }
                to="/about"
                role="tab"
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className={({ isActive }) =>
                  "nav-link w-100 text-center rounded-0 rounded-lg-5 " +
                  (isActive ? "active" : "")
                }
                to="/contact"
                role="tab"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className={({ isActive }) =>
                  "nav-link w-100 text-center rounded-0 rounded-lg-5 " +
                  (isActive ? "active" : "")
                }
                to="/procedures"
                role="tab"
              >
                Procedures
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className={({ isActive }) =>
                  "nav-link w-100 text-center rounded-0 rounded-lg-5 " +
                  (isActive ? "active" : "")
                }
                to="/research"
                role="tab"
              >
                Research
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
