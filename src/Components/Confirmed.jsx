// import React from "react";
// import doc1 from "../images/doc1.jpg";

// export default function Confirmed() {
//   return (
//     <div className="border border-black mx-auto mt-11 w-1/2">
//       <div className="flex items-center border-b h-36 p-4">
//         <img src={doc1} alt="doc1" className="w-16 h-16 ml-4 rounded-full" />
//         <div className="ml-4">
//           <h2 className="text-xl">David Steve</h2>
//           <p className="text-sm">
//             Neurologist <br />
//             M.B.B.S, F.C.P.S (Neurology) <br />
//             <strong>FEE : 3000 Rupees</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import doc1 from "../images/doc1.jpg";

// export default function Confirmed({ data, onEditAppointment }) {
//   return (
//     <div className="border border-black mx-auto mt-11 w-1/2">
//       <div className="flex items-center border-b h-36 p-4">
//         <img src={doc1} alt="doc1" className="w-16 h-16 ml-4 rounded-full" />
//         <div className="ml-4">
//           <h2 className="text-xl">{data.fullName}</h2>
//           <p className="text-sm">
//             Neurologist <br />
//             M.B.B.S, F.C.P.S (Neurology) <br />
//             <strong>FEE : 3000 Rupees</strong>
//           </p>
//         </div>
//       </div>
//       <button
//         onClick={onEditAppointment}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold ml-56 py-2 px-4 rounded mt-4"
//       >
//         Edit Appointment
//       </button>
//     </div>
//   );
// }



import React from "react";
import doc1 from "../images/doc1.jpg";

export default function Confirmed({ data, onEditAppointment }) {
  const { fullName } = data;
  return (
    <div className="border border-black mx-auto mt-11 w-1/2">
      <div className="flex items-center border-b h-36 p-4">
        <img src={doc1} alt="doc1" className="w-16 h-16 ml-4 rounded-full" />
        <div className="ml-4">
          <h2 className="text-xl">{fullName}</h2>
          <p className="text-sm">
            Neurologist <br />
            M.B.B.S, F.C.P.S (Neurology) <br />
            <strong>FEE : 3000 Rupees</strong>
          </p>
        </div>
      </div>
      {/* <button
        onClick={onEditAppointment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold ml-56 py-2 px-4 rounded mt-4"
      >
        Edit Appointment
      </button> */}
    </div>
  );
}
