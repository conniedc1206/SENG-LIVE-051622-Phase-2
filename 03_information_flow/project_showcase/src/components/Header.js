import React from "react";
import { useState } from "react";

const Header = ({ isDarkMode, onUpdateDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onUpdateDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
