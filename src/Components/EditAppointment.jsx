import React from "react";
import { useNavigate } from "react-router-dom";

export default function EditAppointment() {
  const navigate = useNavigate();

  const handleReschedule = () => {
    // Logic for rescheduling appointment goes here
    console.log("Appointment rescheduled!");
  };

  const handleCancel = () => {
    // Logic for canceling appointment goes here
    console.log("Appointment canceled!");
  };

  return (
    <div>
      {/* Rendering the BookingData component */}
      <BookingData
        fullName="John Doe"
        dateOfBirth="1990-01-01"
        gender="Male"
        contactNumber="1234567890"
        email="johndoe@example.com"
        dateTime="2023-06-24 10:00 AM"
        handleReschedule={handleReschedule}
        handleCancel={handleCancel}
      />
    </div>
  );
}

const BookingData = ({
  fullName,
  dateOfBirth,
  gender,
  contactNumber,
  email,
  dateTime,
  handleReschedule,
  handleCancel,
}) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="mt-4 bg-green-200 p-4 rounded w-2/3 ml-56 mb-8">
      <h2 className="text-lg font-bold mb-2">Confirmed Booking:</h2>
      <p>
        <span className="font-bold">Full Name:</span> {fullName}
      </p>
      <p>
        <span className="font-bold">Date of Birth:</span> {dateOfBirth}
      </p>
      <p>
        <span className="font-bold">Gender:</span> {gender}
      </p>
      <p>
        <span className="font-bold">Contact Number:</span> {contactNumber}
      </p>
      <p>
        <span className="font-bold">Email Address:</span> {email}
      </p>
      <p>
        <span className="font-bold">Date Time:</span> {dateTime}
      </p>
      <button
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleReschedule}
      >
        Reschedule
      </button>
      <button
        className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        className="ml-96 mt-8 bg-sky-500 w-36 h-8 text-white rounded"
        onClick={handleProfileClick}
      >
        Edit Appointment
      </button>
    </div>
  );
};

