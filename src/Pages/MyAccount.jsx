// import React from "react";
// import BookingData from "../Components/BookingData";
// // import EditAppointment from "../Components/EditAppointment";

// // import EditProfile from "../Components/EditProfile";
// import Header from "../Components/Header";

// export default function MyAccount() {
//   return (
//     <div>
//       <Header />
//       <BookingData/>
//       {/* <EditProfile />
//       <EditAppointment /> */}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Header from "../Components/Header";
// import BookingData from "../Components/BookingData";
// import BookingForm from "../Components/BookingForm";

// export default function MyAccount() {
//   const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dateOfBirth: "",
//     gender: "",
//     contactNumber: "",
//     email: "",
//     dateTime: "",
//     medicalCondition: "",
//     medication: "",
//     allergies: ""
//   });

//   const handleConfirmBooking = (data) => {
//     setFormData(data);
//     setIsBookingConfirmed(true);
//   };

//   const handleEditAppointment = () => {
//     setIsBookingConfirmed(false);
//   };

//   return (
//     <div>
//       <Header />
//       {!isBookingConfirmed ? (
//         <BookingForm onConfirmBooking={handleConfirmBooking} />
//       ) : (
//         <BookingData
//           data={formData}
//           onEditAppointment={handleEditAppointment}
//         />
//       )}
//     </div>
//   );
// }



// import React, { useState } from "react";
// import Header from "../Components/Header";
// import BookingData from "../Components/BookingData";
// import BookingForm from "../Components/BookingForm";
// import Confirmed from "../Components/Confirmed";

// export default function MyAccount() {
//   const [formData, setFormData] = useState(null);

//   const handleConfirmBooking = (data) => {
//     setFormData(data);
//   };

//   const handleEditAppointment = () => {
//     setFormData(null);
//   };

//   return (
//     <div>
//       <Header />
//       <Confirmed/>
//       {formData ? (
//         <BookingData data={formData} onEditAppointment={handleEditAppointment} />
//       ) : (
//         <BookingForm onConfirmBooking={handleConfirmBooking} />
//       )}
//     </div>
//   );
// }



// import React, { useState } from "react";
// import Header from "../Components/Header";
// import BookingData from "../Components/BookingData";
// import BookingForm from "../Components/BookingForm";
// import Confirmed from "../Components/Confirmed";

// export default function MyAccount() {
//   const [formData, setFormData] = useState(null);
//   const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

//   const handleConfirmBooking = (data) => {
//     setFormData(data);
//     setIsBookingConfirmed(true);
//   };

//   const handleEditAppointment = () => {
//     setIsBookingConfirmed(false);
//   };

//   return (
//     <div>
//       <Header />
//       <Confirmed/>
//       {isBookingConfirmed ? (
//         <div>
//           <BookingData data={formData} onEditAppointment={handleEditAppointment} />
//           {/* <Confirmed /> */}
//         </div>
//       ) : (
//         <BookingForm onConfirmBooking={handleConfirmBooking} />
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import BookingForm from "../Components/BookingForm";
// import Confirmed from "../Components/Confirmed";
// import Header from "../Components/Header";

// export default function MyAccount() {
//   const [formData, setFormData] = useState(null);

//   return (
//     <div>
//       <Header />
       
//       {formData ? (
//         <Confirmed data={formData} />
//       ) : (
//         <BookingForm onConfirmBooking={setFormData} />
//       )}
//     </div>
//   );
// }










// import React, { useState } from "react";
// import BookingForm from "../Components/BookingForm";
// import Confirmed from "../Components/Confirmed";
// import Header from "../Components/Header";

// export default function MyAccount() {
//   const [formData, setFormData] = useState(null);

//   const handleDeleteBooking = () => {
//     setFormData(null);
//   };

//   const handleConfirmBooking = (data) => {
//     setFormData(data);
//   };

//   return (
//     <div>
//       <Header />

//       {formData ? (
//         <Confirmed
//           data={formData}
//           onDeleteBooking={handleDeleteBooking}
//           onCancelBooking={handleDeleteBooking}
//         />
//       ) : (
//         <BookingForm onConfirmBooking={handleConfirmBooking} />
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import BookingForm from "../Components/BookingForm";
import Confirmed from "../Components/Confirmed";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";

export default function MyAccount() {
  const [formData, setFormData] = useState(null);
  const location = useLocation();

  const handleDeleteBooking = () => {
    setFormData(null);
  };

  const handleConfirmBooking = (data) => {
    setFormData(data);
  };

  const doctorData = location.state && location.state.doctorData;

  return (
    <div>
      <Header />

      {doctorData ? (
        <Confirmed
          data={doctorData}
          onEditAppointment={handleDeleteBooking}
        />
      ) : null}

      <BookingForm onConfirmBooking={handleConfirmBooking} />
    </div>
  );
}

 
