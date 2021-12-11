import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <a href="/" className="fs-3  ubuntu  navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx="true">{`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}</style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-6">
            <NavLink className="nav-link" to="/">
              Characters
            </NavLink>
            <NavLink className="nav-link" to="/episodes">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
