import React from "react";

const Header = () => {
  return (
    <div>
      <a href="">
        <img src="nitwit-logo.png" alt="nitwit" className="logo" />
      </a>
      <ul className="nav">
        <li>
          <a href="#">timeline</a>
        </li>
        <li>
          <a href="#">following</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
