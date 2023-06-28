// import React, { useState } from "react";

// import DocListing from "../Components/DocListing";
// import Header from "../Components/Header";

// export default function DoctorInfo() {
//   const [showAll, setShowAll] = useState(false);
//   const [showOnline, setShowOnline] = useState(false);

//   return (
//     <div>
//       <Header />
//       <div className="text-center mb-36">
//         <div className="text-black">
//           <h4 className="mb-6 text-xl tracking-wider mt-10 font-bold">
//             Find and book the best doctors near you
//           </h4>

//           <select className="w-96 h-12 rounded-lg px-4 text-black border border-black bg-white mb-4">
//             <option value="">Select Location</option>
//             <option value="US">US</option>
//             <option value="Canada">Canada</option>
//             <option value="UK">UK</option>
//             <option value="Australia">Australia</option>
//             <option value="Germany">Germany</option>
//             <option value="Russia">Russia</option>
//           </select>

//           <select className="w-96 h-12 rounded-lg ml-4 px-4 border text-black border-black bg-white mb-4">
//             <option value="">Select Speciality</option>
//             <option value="gynecologist">Gynecologist</option>
//             <option value="skin_specialist">Skin Specialist</option>
//             <option value="child_specialist">Child Specialist</option>
//             <option value="neurologist">Neurologist</option>
//             <option value="gastroenterologist">Gastroenterologist</option>
//             <option value="heart_specialist">Heart Specialist</option>
//           </select>

//           <div className="flex items-center justify-center mb-4">
//             <label className="text-black mr-2">
//               <input
//                 type="checkbox"
//                 checked={showAll}
//                 onChange={() => setShowAll(!showAll)}
//                 className="mr-1"
//               />
//               All
//             </label>
//             <label className="text-black">
//               <input
//                 type="checkbox"
//                 checked={showOnline}
//                 onChange={() => setShowOnline(!showOnline)}
//                 className="mr-1"
//               />
//               Online
//             </label>
//           </div>

//           <button className="bg-sky-500 w-36 p-3 rounded text-center">
//             Search
//           </button>
//         </div>
//       </div>
   
//       <DocListing />
//       <DocListing />
//       <DocListing />
//       <DocListing />
//       <DocListing />
//       <DocListing />
//     </div>
//   );
// }



import React, { useState } from "react";
import DocListing from "../Components/DocListing";
import Header from "../Components/Header";

export default function DoctorInfo() {
  const [showAll, setShowAll] = useState(false);
  const [showOnline, setShowOnline] = useState(false);

  const handleCheckboxChange = (checkboxName) => {
    if (checkboxName === "showAll") {
      setShowAll(true);
      setShowOnline(false);
    } else if (checkboxName === "showOnline") {
      setShowAll(false);
      setShowOnline(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="text-center mb-36">
        <div className="text-black">
          <h4 className="mb-6 text-xl tracking-wider mt-10 font-bold">
            Find and book the best doctors near you
          </h4>

          <select className="w-96 h-12 rounded-lg px-4 text-black border border-black bg-white mb-4">
            <option value="">Select Location</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Russia">Russia</option>
          </select>

          <select className="w-96 h-12 rounded-lg ml-4 px-4 border text-black border-black bg-white mb-4">
            <option value="">Select Speciality</option>
            <option value="gynecologist">Gynecologist</option>
            <option value="skin_specialist">Skin Specialist</option>
            <option value="child_specialist">Child Specialist</option>
            <option value="neurologist">Neurologist</option>
            <option value="gastroenterologist">Gastroenterologist</option>
            <option value="heart_specialist">Heart Specialist</option>
          </select>

          <div className="flex items-center justify-center mb-4">
            <label className="text-black mr-2">
              <input
                type="checkbox"
                checked={showAll}
                onChange={() => handleCheckboxChange("showAll")}
                className="mr-1"
              />
              All
            </label>
            <label className="text-black">
              <input
                type="checkbox"
                checked={showOnline}
                onChange={() => handleCheckboxChange("showOnline")}
                className="mr-1"
              />
              Online
            </label>
          </div>

          <button className="bg-sky-500 w-36 p-3 rounded text-center">
            Search
          </button>
        </div>
      </div>

      <DocListing />
      <DocListing />
      <DocListing />
      <DocListing />
      <DocListing />
      <DocListing />
    </div>
  );
}
