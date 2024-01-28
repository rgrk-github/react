import { LOG_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex space justify-between bg-gray-500 rounded-md px-5">
      <div className="align-middle pt-1 pb-1">
        <img className="w-24" src={LOG_IMG_URL} alt="rgrk Food App Logo"></img>
      </div>
      <div className=" flex items-center">
        <div className="">
          <ul className="flex space-x-4">
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
        <div className="px-3">
          <button
            className="bg-green-100 rounded-md px-2 font-bold"
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
