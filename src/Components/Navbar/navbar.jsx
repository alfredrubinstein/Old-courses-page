import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import style from "./navbar.module.css";
import LinkComponent from "../LinkComponent/LinkComponent";
import "./navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBg);
  const linksObject = [
    { path: "/", name: "דף הבית" },
    { path: "/about", name: "מי אנחנו" },
    { path: "/contact", name: "צור קשר" },
    { path: "/gallery", name: "גלריה" },
    { path: "/courses", name: "קורסים" },
    { path: "/dashboard", name: "אזור אישי"},
    { path: "/login", name: "כניסה" },    
  ];

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <NavLink to="/" className="navbar-brand">
          <span> עולם</span>טק
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
{linksObject.map((link, index)=>(
  <LinkComponent to={link.path} name={link.name} index={index}/>)
  )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
