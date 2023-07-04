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

  const handleDeleteBooking = () => {
    
  };

  const handleConfirmBooking = (data) => {
    setBookingData(data);
    setShowBookingForm(true); // Hide the booking form
    setShowConfirmed(true); // Show the confirmed component
  };

  const handleCancelAppointment = () => {
    setShowBookingForm(false); // Show the booking form again
    setShowConfirmed(false); // Hide the confirmed component
  };

  const handleUpdateProfile = (data) => {
    setProfileData(data);
  };

  const doctorData = location.state && location.state.doctorData;

  return (
    <div>
      <Header />
      <EditProfile onUpdateProfile={handleUpdateProfile} />

      {doctorData && !showBookingForm && !showConfirmed && (
        <div>
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
