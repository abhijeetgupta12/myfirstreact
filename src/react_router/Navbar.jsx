import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" exact activeClassName="active">
        AboutUs
      </NavLink>

      <NavLink to="/contact" exact activeClassName="active">
        ContactUs
      </NavLink>

      <NavLink to="/user/Abhi/Gupta" exact activeClassName="active">
        User
      </NavLink>

      <br />

      <a href="/">AboutUs</a>
      <a href="/contact">ContactUs</a>
    </div>
  );
};

export default Navbar;

/*
Here I have used both <NavLink> and <a> tag to show the diff that how on clicking the <a> tag
the page refreshes every time but not in case of <NavLink>. We can add CSS to <NavLink> also.
*/
