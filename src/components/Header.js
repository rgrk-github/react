import { LOG_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
