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
      className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <img src={logo} alt="Logo" className="mx-auto ml-56   mb-12" />
        <div className="mb-6  text-white  ">
          <h1 className=" text-3xl tracking-wider font-bold ">
            Welcome to iCarePro
          </h1>
          <p className="font-lg">Login or sign up to continue</p>
        </div>
        <div className="space-x-1/3">
          <button
            type="submit"
            className="mr-4 bg-sky-500 w-24 px-8 py-2 rounded text-white w-36 text-center shadow-md"
            onClick={handleLoginClick}
          >
            Signin
          </button>
          <button
            type="submit"
            className="mr-4 bg-sky-500 w-24 px-4 py-2 rounded text-white w-36 text-center shadow-md"
            onClick={handleSignupClick}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
