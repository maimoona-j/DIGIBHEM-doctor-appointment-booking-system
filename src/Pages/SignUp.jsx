import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";
import logo from "../images/logo.svg";
import bg1 from "../images/bg1.jpg";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  function onchange(e) {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    // Validate form data
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const auth = getAuth();

      const emailExists = await fetchSignInMethodsForEmail(auth, email);

      if (emailExists.length > 0) {
        alert("Email already exists.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const { user } = userCredential;

      const formDataCopy = {
        name,
        email,
        timestamp: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      alert("Registration successful!");

      navigate("/home");
    } catch (error) {
      console.log("Something went wrong with the registration:", error);
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
          <img src={logo} alt="" className="mb-24 ml-44 max-w-full" />
        </div>

        <div className="flex flex-col justify-center items-center md:mr-96 md:mt-44 mt-10  ">
          <div className="ml-auto mb-44">
            <h1 className="mb-12 text-center text-white font-bold text-3xl  md:mr-36 text-xl whitespace-nowrap">
              Create your account
            </h1>
            <form onSubmit={onSubmit} className="flex flex-col items-center">
              <input
                type="text"
                id="name"
                value={name}
                onChange={onchange}
                placeholder="Full Name"
                className="mb-4 w-72 md:w-96 border rounded border-gray-200 p-3 shadow-md"
              />
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

              <p className="mb-6 text-white mt-4">
                Don't have an account yet?
                <Link
                  to="/signin"
                  className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                >
                  Signin
                </Link>
              </p>
              <button className="bg-sky-500 text-white px-4 py-2 rounded w-72 md:w-96 shadow-md">
                Signup
              </button>
              <div className="flex my-4 border-t border-gray-300 items-center">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
