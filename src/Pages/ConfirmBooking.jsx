import React from "react";
import BookingForm from "../Components/BookingForm";
import Confirmed from "../Components/Confirmed";
import Header from "../Components/Header";

export default function ConfirmBooking() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-4">
        <label className="text-black mb-2 text-center">
          Find your Doctor from here:
        </label>
        <input
          type="text"
          className="w-96 h-12 rounded-lg px-4 border border-black bg-white"
          placeholder="Search"
        />
      </div>
      <Confirmed/>
      <BookingForm/>
    </div>
  );
}
