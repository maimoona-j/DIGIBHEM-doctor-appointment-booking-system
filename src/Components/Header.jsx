import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex bg-sky-700 sticky top-0 z-40 h-24">
      <div>
        <img
          src={logo}
          alt=""
          className="ml-4 mt-4 max-w-full  cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>

      <div className="ml-4 md:hidden">
        <button
          className="flex items-center justify-center h-8 w-8 text-white focus:outline-none"
          onClick={handleToggleDropdown}
        >
          <svg
            className="h-4 w-4 mt-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isDropdownOpen ? (
              <path d="M12 21L1 10H23L12 21Z" fill="currentColor" />
            ) : (
              <path d="M12 3L23 14H1L12 3Z" fill="currentColor" />
            )}
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="bg-sky-700 absolute mt-10 w-36 right-4 rounded shadow-md">
            <ul className="py-2">
              <li
                className="px-4 py-2 cursor-pointer text-white hover:bg-sky-600"
                onClick={handleHomeClick}
              >
                Home
              </li>
              <li
                className="px-4 py-2 cursor-pointer text-white hover:bg-sky-600"
                onClick={handleDoctorClick}
              >
                Doctor
              </li>
               
              <li
                className="px-4 py-2 cursor-pointer text-white hover:bg-sky-600"
                onClick={handleProfileClick}
              >
                My Account
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex ml-auto">
        <ul className="flex mt-8 cursor-pointer text-white ">
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
      <button
        className="ml-4 mr-6 mt-6 w-36 h-10 bg-white hover:bg-sky-500 text-black  rounded"
        onClick={handleLogOutClick}
      >
        Sign Out
      </button>
    </div>
  );
}
