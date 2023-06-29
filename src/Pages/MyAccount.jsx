import React, { useState } from "react";
import BookingForm from "../Components/BookingForm";
import Confirmed from "../Components/Confirmed";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import EditProfile from "../Components/EditProfile";

export default function MyAccount() {
  const location = useLocation();
  const [showBookingForm, setShowBookingForm] = useState(false);  
  const [showConfirmed, setShowConfirmed] = useState(false);  

  const handleDeleteBooking = () => {
    
  };

  const handleConfirmBooking = () => {
    setShowBookingForm(true); // Hide the booking form
    setShowConfirmed(true); // Show the confirmed component
  };

  const doctorData = location.state && location.state.doctorData;

  return (
    <div>
      <Header />
      <EditProfile />

      {doctorData &&
        !showBookingForm && (  
          <div>
            <Confirmed
              data={doctorData}
              onEditAppointment={handleDeleteBooking}
            />

            <BookingForm
              data={doctorData}
              onEditAppointment={handleDeleteBooking}
            />
          </div>
        )}

      {showBookingForm && ( // Render BookingForm component only if showBookingForm is true
        <BookingForm onConfirmBooking={handleConfirmBooking} />
      )}

      {showConfirmed && ( // Render confirmed component only if showBookingForm is true
        <Confirmed onConfirmBooking={handleConfirmBooking} />
      )}
    </div>
  );
}
