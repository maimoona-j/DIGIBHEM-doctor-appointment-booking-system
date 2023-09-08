import bg2 from "../images/bg2.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function Landing() {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate("/doctor");
  };

  const handleDoctorRegisterClick = () => {
    navigate("/registerdoctor");
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div data-aos="fade-up">
      <div
        className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center mx-4 md:mx-0 mb-16 md:mb-36">
          <div className="text-white">
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider font-bold">
              Get ahead of the line with <br /> online Appointments!
            </h1>

            <div className="mt-6 sm:mt-8 md:mt-10">
              <button
                className="bg-blue-800 hover:bg-blue-400 w-full sm:w-56 p-3 m-2 sm:m-3 rounded text-center"
                onClick={handleDoctorClick}
              >
                Find a Doctor
              </button>

              <button
                className="bg-blue-800 hover:bg-blue-400 w-full sm:w-56 p-3 m-2 sm:m-3 rounded text-center"
                onClick={handleDoctorRegisterClick}
              >
                Register as a Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
