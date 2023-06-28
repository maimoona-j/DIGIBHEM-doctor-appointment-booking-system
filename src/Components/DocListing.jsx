// import React from "react";
// import doc1 from "../images/doc1.jpg";
// import { useNavigate } from "react-router-dom";

// export default function DocListing() {
//   const navigate = useNavigate();

//   const handleConfirmClick = () => {
//     // navigate("/confirmbooking");
//     navigate("/profile");
//   };
//   return (
//     <div className="flex items-center justify-center border h-96 mt-16 border-black mx-auto w-2/3">
//       <div className="flex items-center">
//         <img src={doc1} alt="doc1" className="w-56 h-56 mr-36 rounded-full" />
//         <div className="mr-12 text-center">
//           <h2 className="text-xl">David Steve</h2>
//           <p className="text-sm">
//             Neurologist <br />
//             M.B.B.S, F.C.P.S (Neurology)
//           </p>
//           <div className="flex justify-between mt-8">
//             <div>
//               <h3 className="text-lg">Available Time</h3>
//               <p className="text-base">6:00 PM</p>
//             </div>
//             <div>
//               <h3 className="text-lg ml-6">Wait Time</h3>
//               <p className="text-base ml-6">Under 15min</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="px-4 py-2 ml-12 text-white bg-blue-500 rounded"  onClick={handleConfirmClick}>
//         Book Appointment
//       </button>
//     </div>
//   );
// }




import React from "react";
import doc1 from "../images/doc1.jpg";
import { useNavigate } from "react-router-dom";

export default function DocListing() {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    const doctorData = {
      fullName: "David Steve",
      // Add other doctor information here
    };
    navigate("/profile", { state: { doctorData } });
  };

  return (
    <div className="flex items-center justify-center border h-96 mt-16 border-black mx-auto w-2/3">
      <div className="flex items-center">
        <img src={doc1} alt="doc1" className="w-56 h-56 mr-36 rounded-full" />
        <div className="mr-12 text-center">
          <h2 className="text-xl">David Steve</h2>
          <p className="text-sm">
            Neurologist <br />
            M.B.B.S, F.C.P.S (Neurology)
          </p>
          <div className="flex justify-between mt-8">
            <div>
              <h3 className="text-lg">Available Time</h3>
              <p className="text-base">6:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg ml-6">Wait Time</h3>
              <p className="text-base ml-6">Under 15min</p>
            </div>
          </div>
        </div>
      </div>

      <button className="px-4 py-2 ml-12 text-white bg-blue-500 rounded" onClick={handleConfirmClick}>
        Book Appointment
      </button>
    </div>
  );
}
