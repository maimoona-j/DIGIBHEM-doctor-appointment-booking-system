import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import Confirmed from "../Components/Confirmed";

export default function DocListing({ doctorData }) {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  const handleConfirmClick = () => {
    navigate("/profile", { state: { doctorData } });
    setShowBookingForm(true);
    setShowConfirmed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center border h-[200px] mb-8 md:h-96 mt-16 bg-white border-gray-300 rounded-md mx-auto w-2/3 px-4 shadow-xl">
      <img
        src={doctorData.image}
        alt="Doctor"
        className="w-36 h-36 mt-6 rounded mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl mb-2">{doctorData.fullName}</h2>
        <h3 className="text-lg">Fee:</h3>
        <p className="text-sm">{doctorData.fee}</p>
        <div className="flex flex-col mt-4">
          <div className="mb-2">
            <h3 className="text-lg">Available Time</h3>
            <p className="text-base">{doctorData.time}</p>
          </div>
          <div>
            <h3 className="text-lg">Status</h3>
            <p className="text-base">{doctorData.status}</p>
          </div>
        </div>
      </div>

      <button
        className="px-4 py-2 mb-6 text-white  bg-blue-500 hover:bg-blue-700  rounded"
        onClick={handleConfirmClick}
      >
        Book Appointment
      </button>

      {showBookingForm && <BookingForm />}

      {showConfirmed && <Confirmed />}
    </div>
  );
}
