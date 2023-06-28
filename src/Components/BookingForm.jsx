import React, { useState } from "react";
  import BookingData from "../Components/BookingData";

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);
  const [medicalCondition, setMedicalCondition] = useState('');
  const [medication, setMedication] = useState('');
  const [allergies, setAllergies] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic here
  //   setIsBookingConfirmed(true);
  //   setShowConfirmationAlert(true);
  //   alert("Appointment has been confirmed!");

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!fullName || !dateOfBirth || !gender || !contactNumber || !email || !dateTime) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Perform form submission logic here
    setIsBookingConfirmed(true);
    setShowConfirmationAlert(true);
    alert("Appointment has been confirmed!");
  };

  const handleEditAppointment = () => {
    setIsBookingConfirmed(false);
    setShowConfirmationAlert(false);
  };

//   className="border border-black mx-auto w-1/2 mb-12 p-4 mt-12"
  return (
    <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">

    <form onSubmit={handleSubmit} >
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

      <div className="my-4">
        <label htmlFor="dateTime" className="text-lg">
          Date Time:
        </label>
        <input
          type="datetime-local"
          id="dateTime"
          placeholder="Date Time"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
          <label htmlFor="medicalCondition" className="text-lg">
            Medical Condition:
          </label>
          <div className="flex items-center">
            <textarea
              id="medicalCondition"
              value={medicalCondition}
              onChange={(e) => setMedicalCondition(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>

          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="medication" className="text-lg">
            Medication:
          </label>
          <div className="flex items-center">
            <textarea
              id="medication"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>

          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="allergies" className="text-lg">
            Allergies:
          </label>
          <div className="flex items-center">
            <textarea
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>

          </div>
        </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold ml-56 py-2 px-4 rounded"
      >
        Confirm Booking
      </button>

    </form>

    {isBookingConfirmed ? (
        <BookingData
          fullName={fullName}
          dateOfBirth={dateOfBirth}
          gender={gender}
          contactNumber={contactNumber}
          email={email}
          dateTime={dateTime}
          medicalCondition={medicalCondition}
          medication={medication}
          allergies={allergies}
          onEditAppointment={handleEditAppointment}
        />
      ) : null}

      {showConfirmationAlert && (
        <div className="mt-4 bg-green-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Appointment Confirmed!</h2>
          <p>Your appointment has been successfully booked.</p>
        </div>
      )}

    </div>

// </div>

  );
}






// import React, { useState } from "react";
// import BookingData from "../Components/BookingData";
// import { useNavigate } from "react-router-dom";
// // import Home from "../Pages/Home";

// export default function BookingForm() {
//   const [fullName, setFullName] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [dateTime, setDateTime] = useState("");
//   const [medicalCondition, setMedicalCondition] = useState("");
//   const [medication, setMedication] = useState("");
//   const [allergies, setAllergies] = useState("");
//   const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
//   const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);

//   const navigate = useNavigate();

//   const handleConfirmBooking = (e) => {
//     e.preventDefault();
//     setIsBookingConfirmed(true);
//     setShowConfirmationAlert(true);
//     navigate("/profile");
//   };

//   const handleEditAppointment = () => {
//     setIsBookingConfirmed(false);
//     setShowConfirmationAlert(false);
//   };

//   const handleConfirmationAlertOk = () => {
//     setShowConfirmationAlert(false);
//   };


//   return (
//     <div>
//     {!isBookingConfirmed ? (
//     <div className="border border-black mx-auto w-1/2 p-4 mt-4 mb-4">
//       <form onSubmit={handleConfirmBooking}>
//         <div className="my-4">
//           <label htmlFor="fullName" className="text-lg">
//             Full Name:
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="my-4">
//           <label htmlFor="dateOfBirth" className="text-lg">
//             Date of Birth:
//           </label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             placeholder="Date of Birth"
//             value={dateOfBirth}
//             onChange={(e) => setDateOfBirth(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="my-4">
//           <label htmlFor="gender" className="text-lg">
//             Gender:
//           </label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="my-4">
//           <label htmlFor="contactNumber" className="text-lg">
//             Contact Number:
//           </label>
//           <input
//             type="tel"
//             id="contactNumber"
//             placeholder="Contact Number"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="my-4">
//           <label htmlFor="email" className="text-lg">
//             Email Address:
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="my-4">
//           <label htmlFor="dateTime" className="text-lg">
//             Date Time:
//           </label>
//           <input
//             type="datetime-local"
//             id="dateTime"
//             placeholder="Date Time"
//             value={dateTime}
//             onChange={(e) => setDateTime(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="medicalCondition" className="text-lg">
//             Medical Condition:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="medicalCondition"
//               value={medicalCondition}
//               onChange={(e) => setMedicalCondition(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="medication" className="text-lg">
//             Medication:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="medication"
//               value={medication}
//               onChange={(e) => setMedication(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="allergies" className="text-lg">
//             Allergies:
//           </label>
//           <div className="flex items-center">
//             <textarea
//               id="allergies"
//               value={allergies}
//               onChange={(e) => setAllergies(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             ></textarea>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold ml-56 py-2 px-4 rounded"
//         >
//           Confirm Booking
//         </button>
//       </form>
//       </div>
//       ) : (
//         <BookingData
//         fullName={fullName}
//         dateOfBirth={dateOfBirth}
//         gender={gender}
//         contactNumber={contactNumber}
//         email={email}
//         dateTime={dateTime}
//         medicalCondition={medicalCondition}
//         medication={medication}
//         allergies={allergies}
//         onEditAppointment={handleEditAppointment}
//       />
//     )}
//     </div>
//   );
// }
