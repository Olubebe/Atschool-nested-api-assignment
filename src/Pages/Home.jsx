import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="header">Welcome to a Random User API Project</h1>
      <h2 className="sub-heading">Click Below to for nested routing</h2>
      <nav className="wrapper-navbar">
        <Link
          className="wrapper__description"
          to="description"
        >
          Click to See Description
        </Link>
        <Link className="wrapper__example" to="example">
          Click to See Nested Example
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;