import { useState } from "react";

const Header = () => {
  const [isDarkMode, setisDarkMode] = useState(true);

  const handleClick = () => {
    setisDarkMode((currentMode) => !currentMode);
  };
  //console.log(isDarkMode);

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>Dark Mode</button>
    </header>
  );
};

export default Header;
