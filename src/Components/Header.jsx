import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  // const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleDoctorClick = () => {
    navigate("/doctor");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleLogOutClick = () => {
    navigate("/");
  };

  return (
    <div className="flex bg-sky-700 sticky top-0 z-40 h-24">
      <div>
        < img src={logo} alt="" className="mb-24 ml-44 mt-4 max-w-full" onClick={handleLogoClick} />
      </div>
      <div>
        <ul className="flex mt-8 cursor-pointer text-white">
          <li className="" onClick={handleHomeClick}>
            Home
          </li>
          <li className="ml-8" onClick={handleDoctorClick}>
            Doctor
          </li>
          <li className="ml-8" onClick={handleProfileClick}>
            My Account
          </li>
        </ul>
      </div>

      <button className="ml-96 mt-8 bg-sky-500 w-36 h-8 text-white rounded " onClick={handleLogOutClick} >
        Sign Out
      </button>
    </div>
  );
}
