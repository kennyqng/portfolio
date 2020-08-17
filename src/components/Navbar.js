import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark justify-content-center mx-0 mb-4">
    <a className="navbar-brand justify-content-center text-white mx-0" href="/">Kenny Nguyen</a>
    <div className="navbar navbar-expand-xl bg-dark navbar-light ml-md-auto" id="navbarNav">
      <ul className="nav">
        <li className="nav-item active">
          <Link to="/" className={location.pathname === "/" ? "nav-link text-info" : "nav-link text-white"}>Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link text-info" : "nav-link text-white"}>Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link text-info" : "nav-link text-white"}>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
