// import React, { useState } from "react";

// export default function EditProfile() {
//   const [fullName, setFullName] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");

//   const handleUpdateProfile = () => {
//     // Perform update profile logic here
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-extrabold text-center mt-5">
//         Welcome to iCarePro
//       </h2>
//       <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
//         <form>
          // <div className="my-4">
          //   <label htmlFor="fullName" className="text-lg">
          //     Full Name:
          //   </label>
          //   <input
          //     type="text"
          //     id="fullName"
          //     placeholder="Full Name"
          //     value={fullName}
          //     onChange={(e) => setFullName(e.target.value)}
          //     className="w-full p-2 border border-gray-300 rounded"
          //   />
          // </div>

          // <div className="my-4">
          //   <label htmlFor="dateOfBirth" className="text-lg">
          //     Date of Birth:
          //   </label>
          //   <input
          //     type="date"
          //     id="dateOfBirth"
          //     placeholder="Date of Birth"
          //     value={dateOfBirth}
          //     onChange={(e) => setDateOfBirth(e.target.value)}
          //     className="w-full p-2 border border-gray-300 rounded"
          //   />
          // </div>

          // <div className="my-4">
          //   <label htmlFor="gender" className="text-lg">
          //     Gender:
          //   </label>
          //   <select
          //     id="gender"
          //     value={gender}
          //     onChange={(e) => setGender(e.target.value)}
          //     className="w-full p-2 border border-gray-300 rounded"
          //   >
          //     <option value="">Select Gender</option>
          //     <option value="male">Male</option>
          //     <option value="female">Female</option>
          //     <option value="other">Other</option>
          //   </select>
          // </div>

          // <div className="my-4">
          //   <label htmlFor="contactNumber" className="text-lg">
          //     Contact Number:
          //   </label>
          //   <input
          //     type="tel"
          //     id="contactNumber"
          //     placeholder="Contact Number"
          //     value={contactNumber}
          //     onChange={(e) => setContactNumber(e.target.value)}
          //     className="w-full p-2 border border-gray-300 rounded"
          //   />
          // </div>

          // <div className="my-4">
          //   <label htmlFor="email" className="text-lg">
          //     Email Address:
          //   </label>
          //   <input
          //     type="email"
          //     id="email"
          //     placeholder="Email Address"
          //     value={email}
          //     onChange={(e) => setEmail(e.target.value)}
          //     className="w-full p-2 border border-gray-300 rounded"
          //   />
          // </div>

//           <button
//             type="button"
//             onClick={handleUpdateProfile}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import ProfileData from "../Components/ProfileData";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdateProfile = () => {
     
    alert("Profile data saved successfully!");
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center mt-5">
        Welcome to iCarePro
      </h2>
      <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
        <form>
         

        <div className="my-4">
            <label htmlFor="fullName" className="text-lg">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="dateOfBirth" className="text-lg">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="gender" className="text-lg">
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="my-4">
            <label htmlFor="contactNumber" className="text-lg">
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="my-4">
            <label htmlFor="email" className="text-lg">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>



          <button
            type="button"
            onClick={handleUpdateProfile}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
           save
          </button>
        </form>
      </div>

      <ProfileData
        fullName={fullName}
        dateOfBirth={dateOfBirth}
        gender={gender}
        contactNumber={contactNumber}
        email={email}
      />
    </div>
  );
}




 