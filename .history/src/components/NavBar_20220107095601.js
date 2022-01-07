import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const toggleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">deafDuo</div>
          <ul className={toggle ? "mobile-menu-link" : "menu-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li className="sign-up-btn">
              <Link to="signin">Log In</Link>
            </li>
            <li className="sign-up-btn">
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
          <div className="hamburger">
            <FaAlignJustify onClick={toggleHamburger} />
          </div>
        </div>
      </nav>
    </>
  );
}
