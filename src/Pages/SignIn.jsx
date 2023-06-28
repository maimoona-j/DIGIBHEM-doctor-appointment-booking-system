import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import OAuth from "../Components/OAuth";
import logo from "../images/logo.svg";
import bg1 from "../images/bg1.jpg";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Something went wrong with the registration:", error);
      // or handle the error appropriately
    }
  }
  

  return (
    <>
      <div
        className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col md:flex-row items-center h-screen">
          <div className="w-full flex justify-center">
            <img src={logo} alt="" className="mb-24 ml-44 max-w-full" />
          </div>

          <div className="flex flex-col justify-center items-center mr-96 mt-44">
            <div className="ml-auto mb-44">
              <h1 className="mb-12 text-center text-white font-bold text-3xl mr-36 text-xl">
                Welcome Back
              </h1>

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={onchange}
                  placeholder="Email address"
                  className="mb-4 w-96   border rounded border-gray-200 p-3 shadow-md"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={onchange}
                  className="mb-4 w-96 border   rounded border-gray-200 p-3 shadow-md"
                />
                <div className="flex  text-sm   ">
                  <p className="mb-6   text-white mt-4">
                    Don't have an account yet?
                    <Link
                      to="/signup"
                      className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                    >
                      Signup
                    </Link>
                  </p>
                  <p className="mb-2  mt-4 ml-3 text-white">
                    <Link
                      to="/forgotpassword"
                      className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                    >
                      ForgotPassword?
                    </Link>
                  </p>
                </div>
                <button className="bg-sky-500 text-white px-4 py-2 rounded w-96 shadow-md">
                  Signin
                </button>

                <div className=" flex my-4 before:border-t items-center before:flex-1  before:border-gray-300 after:flex-1  after:border-gray-300">
                  <p className="text-center font-semibold mx-4  text-white">
                    OR
                  </p>
                </div>
                <OAuth />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
























// import OAuth from "../Components/OAuth";
// import logo from "../images/logo.svg";
// import bg1 from "../images/bg1.jpg";

// export default function SignIn() {
//   const [showWelcome, setShowWelcome] = useState(false);

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = formData;
//   const navigate = useNavigate();
//   function onchange(e) {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   }

 
  
//   async function onSubmit(e) {
//     e.preventDefault();
//     try {
//       const auth = getAuth();
//       const userCredentail = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       if (userCredentail.user) {
//         navigate("/home");
//       }
//     } catch (error) {
//       console.log("Something went wrong with the registration:", error);
//       // or handle the error appropriately
//     }
//   }

//   return (
//     <>
//       <div
//         className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center h-screen">
//           <div className="w-full flex justify-center">
//             <img src={logo} alt="" className="mb-24 ml-44 max-w-full" />
//           </div>

//           <div className="flex flex-col justify-center items-center mr-96 mt-44">
//             <div className="ml-auto mb-44">
//               <h1 className="mb-12 text-center text-white font-bold text-3xl mr-36 text-xl">
//                 Welcome Back
//               </h1>

//               <form onSubmit={onSubmit}>
//                 <input
//                   type="text"
//                   id="email"
//                   value={email}
//                   onChange={onchange}
//                   placeholder="Email address"
//                   className="mb-4 w-96   border rounded border-gray-200 p-3 shadow-md"
//                 />
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={onchange}
//                   className="mb-4 w-96 border   rounded border-gray-200 p-3 shadow-md"
//                 />
//                 <div className="flex  text-sm   ">
//                   <p className="mb-6   text-white mt-4">
//                     Don't have an account yet?
//                     <Link
//                       to="/signup"
//                       className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//                     >
//                       Signup
//                     </Link>
//                   </p>
//                   <p className="mb-2  mt-4 ml-3 text-white">
//                     <Link
//                       to="/forgotpassword"
//                       className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//                     >
//                       ForgotPassword?
//                     </Link>
//                   </p>
//                 </div>
//                 <button className="bg-sky-500 text-white px-4 py-2 rounded w-96 shadow-md">
//                   Signin
//                 </button>

//                 <div className=" flex my-4 before:border-t items-center before:flex-1  before:border-gray-300 after:flex-1  after:border-gray-300">
//                   <p className="text-center font-semibold mx-4  text-white">
//                     OR
//                   </p>
//                 </div>
//                 <OAuth />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


 





// import React from "react";
// import { useState , useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { signInWithEmailAndPassword, getAuth } from "firebase/auth";





 