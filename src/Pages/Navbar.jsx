import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav__links" to="/">
        Random Users
      </Link>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>

    </div>
  );
}

export default Navbar;