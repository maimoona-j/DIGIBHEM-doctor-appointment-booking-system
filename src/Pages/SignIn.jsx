import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

 
import logo from "../images/logo.svg";
import bg1 from "../images/bg1.jpg";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your information before proceeding.");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Something went wrong with the registration:", error);
      // or handle the error appropriately
    }
  }

  return (
    <div
      className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center h-screen">
        <div className="w-full flex justify-center">
          <img src={logo} alt="" className="mb-24 ml-44 md:ml-44 max-w-full" />
        </div>

        <div className="flex flex-col justify-center items-center md:mr-96 mt-10 md:mt-44">
          <div className="ml-auto mb-8 md:mb-44">
            <h1 className="mb-6 text-center text-white font-bold text-3xl md:text-xl">
              Welcome Back
            </h1>

            <form onSubmit={onSubmit} className="flex flex-col items-center">
              <input
                type="text"
                id="email"
                value={email}
                onChange={onchange}
                placeholder="Email address"
                className="mb-4 w-72 md:w-96 border rounded border-gray-200 p-3 shadow-md"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onchange}
                className="mb-4 w-72 md:w-96 border rounded border-gray-200 p-3 shadow-md"
              />
              <div className="flex text-sm">
                <p className="mb-4 text-white  mt-2">
                  Don't have an account yet?
                  <Link
                    to="/signup"
                    className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                  >
                    Signup
                  </Link>
                </p>
              </div>
              <button className="bg-sky-500 text-white px-4 py-2 rounded w-72 md:w-96 shadow-md">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
