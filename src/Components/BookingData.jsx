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
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-5 mt-4 rounded"
        onClick={onEditAppointment}
      >
        Edit Appointment
      </button>

      {!showConfirmation && (
        <div>
          <button
            className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 ml-4 mt-3 px-4 rounded"
            onClick={(e) => handleCancelAppointment(e)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
