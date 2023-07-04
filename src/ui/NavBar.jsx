import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark  p-3">
        <Link className="navbar-brand" to="/">
          Multiple-CRUD-App
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/usuarios"
            >
              users
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/santos"
            >
              santos
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
