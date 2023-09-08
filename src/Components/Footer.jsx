import React from "react";
import logo from "../images/logo.svg";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="bg-black text-white h-auto lg:h-56 md:h-96"
      data-aos="fade-up"
    >
      <div className="container mx-auto py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex lg:justify-center md:justify-center md:ml-24 ">
            <img
              src={logo}
              alt=""
              className="w-36 h-24 lg:ml-9  cursor-pointer"
            />
          </div>
          <div className="mt-4 lg:mr-8 ml-8  md:mt-0">
            <ul className="text-xl md:text-2xl flex flex-col md:flex-row gap-4 md:ml-6 cursor-pointer">
              <li className="mb-2 md:mb-0 hover:text-red-600">Home</li>
              <li className="mb-2 md:mb-0 hover:text-red-600">User</li>
              <li className="hover:text-red-600">Appointment</li>
            </ul>
          </div>
          <div className="mt-6 lg:mt-4 md:mt-0 flex justify-center md:justify-end">
            <FaFacebook className="text-4xl m-2 md:m-4 hover:text-red-600" />
            <FaInstagramSquare className="text-4xl m-2 md:m-4 hover:text-red-600" />
            <FaTwitter className="text-4xl m-2 md:m-4 hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
