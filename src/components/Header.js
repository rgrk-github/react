import { LOG_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex">
      <div className="w-50">
        <img className="logo" src={LOG_IMG_URL} alt="rgrk Food App Logo"></img>
      </div>
      <div className="navigation-container">
        <div className="navigation">
          <ul>
            <li>
              <h4>OnlineStatus :{onlineStatus ? "🟢" : "🔴"}</h4>
            </li>
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
