import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav_menu">
        <ul className="nav_list">
          <Link to="/" className="nav_items">
            Home
          </Link>
          <Link to="/add" className="nav_items">
            Create
          </Link>
          <Link to="/login" className="nav_items">
            Login
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
