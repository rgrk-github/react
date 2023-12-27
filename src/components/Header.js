import { LOG_IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo">
        <img className="logo" src={LOG_IMG_URL} alt="rgrk Food App Logo"></img>
      </div>
      <div className="navigation-container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="accountNav">
          <button
            className="login"
            onClick={() =>
              btnLabel === "Login"
                ? setBtnLabel("Logout")
                : setBtnLabel("Login")
            }
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
