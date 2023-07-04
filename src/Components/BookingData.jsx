import React, { useState } from "react";

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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancelAppointment = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel the appointment?"
    );
    if (confirmCancel && typeof onCancelAppointment === "function") {
      onCancelAppointment();
    }
  };

  return (
    <div className="border border-black mx-auto w-11/12 md:w-1/2 p-4 mt-4 mb-4">
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
        className="bg-blue-500 hover:bg-blue-600 text-white w-56 font-bold py-2 px-4 mt-4 md:ml-5 rounded"
        onClick={onEditAppointment}
      >
        Edit Appointment
      </button>

      {!showConfirmation && (
        <div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white w-56 font-bold py-2 mt-3 md:ml-5 rounded"
            onClick={handleCancelAppointment}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
