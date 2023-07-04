import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import bg1 from "../images/bg1.jpg";

export default function Welcome() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div
      className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
      }}
    >
      <div className="text-center">
        <div className="w-96 mx-auto mb-12">
          <img src={logo} alt="Logo" />
        </div>

        <div className="mb-6 text-white">
          <h1 className="text-3xl tracking-wider font-bold ">
            Welcome to iCarePro
          </h1>
          <p className="text-lg">Login or sign up to continue</p>
        </div>

        <div className="flex flex-wrap justify-center">
          <button
            type="submit"
            className="mr-2 mb-2 sm:mr-4 bg-sky-500 px-4 py-2 rounded text-white shadow-md w-24 sm:w-36 h-[40px]"
            onClick={handleLoginClick}
          >
            Signin
          </button>

          <button
            type="submit"
            className="bg-sky-500 px-4 py-2 rounded text-white shadow-md w-24 sm:w-36 h-[40px]"
            onClick={handleSignupClick}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
