// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/logo.svg";
// import bg1 from "../images/bg1.jpg";

// export default function ForgotPassword() {
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
//               <input
//                 type="text"
//                 placeholder="Email address"
//                 className="mb-4 w-96 text-gray-100 border rounded border-gray-200 p-3 shadow-md"
//               />
              
//               <button className="bg-sky-500 text-white px-4 py-2 rounded w-96 shadow-md">
//             Send Reset Password
//               </button>
//               <p className="mb-6  text-white mt-4">
//                 Don't have an account yet?
//                 <Link
//                   to="/signup"
//                   className="text-blue-300 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//                 >

//                   Signup
//                 </Link>
//               </p>
               
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
