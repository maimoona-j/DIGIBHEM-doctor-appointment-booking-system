import React, { useState } from "react";
import BookingForm from "../Components/BookingForm";
import BookingData from "../Components/BookingData";
import Confirmed from "../Components/Confirmed";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import EditProfile from "../Components/EditProfile";

export default function MyAccount() {
  const location = useLocation();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
  });
  const [bookingData, setBookingData] = useState(null);

  const handleDeleteBooking = () => {};

  const handleConfirmBooking = (data) => {
    setBookingData(data);
    setShowBookingForm(true);  
    setShowConfirmed(true);  
  };

  const handleCancelAppointment = () => {
    setShowBookingForm(false);  
    setShowConfirmed(false);  
  };

  const handleUpdateProfile = (data) => {
    setProfileData(data);
  };

  const doctorData = location.state && location.state.doctorData;

  return (
    <div>
      <Header />
      <h2 className="text-3xl text-center ">My Profile</h2>
      <p className="text-center text-gray-500 text-lg">
        Update by clicking on desired input field and press save{" "}
      </p>
      <EditProfile onUpdateProfile={handleUpdateProfile} />

      {doctorData && !showBookingForm && !showConfirmed && (
        <div>
          <h2 className="text-3xl text-center mt-5 ">Appointment Details</h2>
          <Confirmed
            data={doctorData}
            onEditAppointment={handleDeleteBooking}
          />
          <BookingForm
            data={doctorData}
            onConfirmBooking={handleConfirmBooking}
            onEditAppointment={handleDeleteBooking}
          />
        </div>
      )}

      {showBookingForm && (
        <BookingForm
          onConfirmBooking={handleConfirmBooking}
          onCancelAppointment={handleCancelAppointment}
        />
      )}

      {showConfirmed && bookingData && (
        <BookingData
          fullName={bookingData.fullName}
          dateOfBirth={bookingData.dateOfBirth}
          gender={bookingData.gender}
          contactNumber={bookingData.contactNumber}
          email={bookingData.email}
          dateTime={bookingData.dateTime}
          medicalCondition={bookingData.medicalCondition}
          medication={bookingData.medication}
          allergies={bookingData.allergies}
          onEditAppointment={handleDeleteBooking}
          onCancelAppointment={handleCancelAppointment}
        />
      )}
    </div>
  );
}

 