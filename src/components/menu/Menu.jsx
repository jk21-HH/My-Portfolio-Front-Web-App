import { useState } from "react";

import "./Menu.scss";

const Menu = (props) => {
  const handleMenuClick = () => {
    props.setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={handleMenuClick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#milstones">Milstones</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
