// import React from "react";
// import { useNavigate } from "react-router-dom";

// const BookingData = ({ fullName, dateOfBirth, gender, contactNumber, email, dateTime }) => {
//   const navigate = useNavigate();
  
//   const handleProfileClick = () => {
 
//     navigate("/profile");
//   };
//   return (
//     <div className="mt-4 bg-green-200 p-4 rounded w-2/3 ml-56 mb-8">
//       <h2 className="text-lg font-bold mb-2">Confirmed Booking:</h2>
//       <p>
//         <span className="font-bold">Full Name:</span> {fullName}
//       </p>
//       <p>
//         <span className="font-bold">Date of Birth:</span> {dateOfBirth}
//       </p>
//       <p>
//         <span className="font-bold">Gender:</span> {gender}
//       </p>
//       <p>
//         <span className="font-bold">Contact Number:</span> {contactNumber}
//       </p>
//       <p>
//         <span className="font-bold">Email Address:</span> {email}
//       </p>
//       <p>
//         <span className="font-bold">Date Time:</span> {dateTime}
//       </p>
//       <button className="ml-96 mt-8 bg-sky-500 w-36 h-8 text-white rounded "  onClick={handleProfileClick}>Edit Appointment</button>
//     </div>
//   );
// };

// export default BookingData;



// import React from "react";

// export default function BookingData({
//   fullName,
//   dateOfBirth,
//   gender,
//   contactNumber,
//   email,
//   dateTime,
//   medicalCondition,
//   medication,
//   allergies,
//   onEditAppointment,
// }) {
//   return (
//     <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
//       <h2 className="text-lg font-bold mb-2">Booking Profile</h2>
//       <div>
//         <p>
//           <strong>Full Name:</strong> {fullName}
//         </p>
//         <p>
//           <strong>Date of Birth:</strong> {dateOfBirth}
//         </p>
//         <p>
//           <strong>Gender:</strong> {gender}
//         </p>
//         <p>
//           <strong>Contact Number:</strong> {contactNumber}
//         </p>
//         <p>
//           <strong>Email Address:</strong> {email}
//         </p>
//         <p>
//           <strong>Date Time:</strong> {dateTime}
//         </p>
//         <p>
//           <strong>Medical Condition:</strong> {medicalCondition}
//         </p>
//         <p>
//           <strong>Medication:</strong> {medication}
//         </p>
//         <p>
//           <strong>Allergies:</strong> {allergies}
//         </p>
//       </div>
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         onClick={onEditAppointment}
//       >
//         Edit Appointment
//       </button>
//       <button
//         className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         onClick={onEditAppointment}
//       >
//        Cancel
//       </button>
//     </div>
//   );
// }



import React from "react";

export default function BookingData({
  fullName,
  dateOfBirth,
  gender,
  contactNumber,
  email,
  dateTime,
  medicalCondition,
  medication,
  allergies,
  onEditAppointment,
  onCancelAppointment,
}) {
  return (
    <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Booking Profile</h2>
      <div>
        <p>
          <strong>Full Name:</strong> {fullName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {dateOfBirth}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Contact Number:</strong> {contactNumber}
        </p>
        <p>
          <strong>Email Address:</strong> {email}
        </p>
        <p>
          <strong>Date Time:</strong> {dateTime}
        </p>
        <p>
          <strong>Medical Condition:</strong> {medicalCondition}
        </p>
        <p>
          <strong>Medication:</strong> {medication}
        </p>
        <p>
          <strong>Allergies:</strong> {allergies}
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onEditAppointment}
      >
        Edit Appointment
      </button>
      <button
        className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onCancelAppointment}
      >
        Cancel
      </button>
    </div>
  );
}


 
 

