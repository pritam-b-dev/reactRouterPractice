import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "red " : "black",
  fontWeight: isActive ? "bold" : "normal",
});

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#b91e1e37",
      }}
    >
      <NavLink style={navStyle} to="/" end>
        Home
      </NavLink>
      <NavLink style={navStyle} to="/about" end>
        About
      </NavLink>
      <NavLink style={navStyle} to="/contact" end>
        Contact
      </NavLink>
      <NavLink style={navStyle} to="/forms" end>
        Form
      </NavLink>
      <NavLink style={navStyle} to="/conditionalrendering" end>
        Conditional Render
      </NavLink>
      <NavLink style={navStyle} to="/offerdisplaying" end>
        Offer!
      </NavLink>
    </nav>
  );
};

export default Navbar;
