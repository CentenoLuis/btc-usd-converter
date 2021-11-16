import React from "react";
import { links } from "./nav-links";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <img
            src="https://cdn.worldvectorlogo.com/logos/bitcoin-logo.svg"
            alt=""
          />
          <div>
            {links.map((link) => {
              return (
                <a href={link.url} key={link.id} onClick={handleClick}>
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
