import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark justify-content-center mx-0 mb-4">
      <a
        className="navbar-brand justify-content-center text-white mx-0"
        href="https://kennyqng.github.io/portfolio/"
      >
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        ></img>
        Kenny Nguyen
      </a>

      <div
        className="navbar navbar-expand-xl bg-dark navbar-light ml-md-auto"
        id="navbarNav"
      >
        <ul className="nav">
          <li className="nav-item active">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link " : "nav-link text-light"
              }
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link "
                  : "nav-link text-light"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link "
                  : "nav-link text-light"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
