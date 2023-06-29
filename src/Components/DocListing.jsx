import React, { useState } from "react";
import doc1 from "../images/doc1.jpg";
import { useNavigate } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import Confirmed from "./Confirmed";

export default function DocListing() {
  const navigate = useNavigate();

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  const handleConfirmClick = () => {
    const doctorData = {
      fullName: "David Steve",
      // Add other doctor information here
    };
    navigate("/profile", { state: { doctorData } });
    setShowBookingForm(true); // Show the booking form
    setShowConfirmed(true); // Show the confirmed component
  };

  return (
    <div className="flex items-center justify-center border h-96 mt-16 border-black mx-auto w-2/3">
      <div className="flex items-center">
        <img src={doc1} alt="doc1" className="w-56 h-56 mr-36 rounded-full" />
        <div className="mr-12 text-center">
          <h2 className="text-xl">David Steve</h2>
          <p className="text-sm">
            Neurologist <br />
            M.B.B.S, F.C.P.S (Neurology)
          </p>
          <div className="flex justify-between mt-8">
            <div>
              <h3 className="text-lg">Available Time</h3>
              <p className="text-base">6:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg ml-6">Wait Time</h3>
              <p className="text-base ml-6">Under 15min</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="px-4 py-2 ml-12 text-white bg-blue-500 rounded"
        onClick={handleConfirmClick}
      >
        Book Appointment
      </button>

      {showBookingForm && ( // Render the booking form only if showBookingForm is true
        <BookingForm />
      )}

      {showConfirmed && ( // Render the confirmed only if showconfirmbooking is true
        <Confirmed />
      )}
    </div>
  );
}
