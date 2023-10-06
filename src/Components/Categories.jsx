import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Categories() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  // Define your department data here
  const departments = [
    { name: "Cardiologist" },
    { name: "Dermatologist" },
    { name: "Neurologist" },
    { name: "Gynecologist" },
    { name: "Pediatrician" },
    { name: "Urologist" },
    { name: "Nephrologist" },
    { name: "Cardiologist" },
  ];

  // Define the number of items to show above and below on large screens
  const itemsAbove = departments.slice(0, 4);
  const itemsBelow = departments.slice(4);

  return (
    <div data-aos="fade-up">
      <h1 className="text-4xl font-bold text-blue-800 mt-5 text-center md:text-left md:ml-24 lg:ml-[500px]">
        Our Departments
      </h1>

      {/* Large Screen Layout */}
      <div className="hidden md:flex justify-center lg:ml-96 md:justify-start">
        {itemsAbove.map((department, index) => (
          <div
            key={index}
            className="bg-blue-800 hover:bg-blue-400 shadow-lg rounded w-48 md:w-64 h-32 md:h-40 mt-5 md:mt-10 mx-2 md:mx-4 group relative"
          >
            <h3 className="text-white lg:ml-16 lg:mt-16 sm:ml-36   md:ml-10 mt-4 md:mt-6 group-hover:opacity-0">
              {department.name}
            </h3>
            <button className="absolute w-36 md:w-44 p-1 bottom-4 md:bottom-6 rounded left-5 lg:ml-6 right-0 bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              Find Doctor
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center md:hidden">
        {departments.map((department, index) => (
          <div
            key={index}
            className="bg-blue-800 hover:bg-blue-400 mb-4  shadow-lg rounded w-48 md:w-64 h-32 md:h-40 mt-5 md:mt-10 mx-2 md:mx-8 group relative flex flex-col justify-center items-center"
          >
            <h3 className="text-white mt-4 md:mt-9 group-hover:opacity-0 text-center">
              {department.name}
            </h3>
            <button className="absolute w-36 md:w-44 p-1 bottom-4 md:bottom-6 rounded left-3 right-0 bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              Find Doctor
            </button>
          </div>
        ))}
      </div>

      <div className="hidden lg:mb-4 md:flex justify-center md:justify-start">
        {itemsBelow.map((department, index) => (
          <div
            key={index}
            className="bg-blue-800 hover:bg-blue-400 shadow-lg rounded w-48 md:w-64 h-32 md:h-40 mt-5 md:mt-10 mx-2 md:mx-4 group relative"
          >
            <h3 className="text-white sm:ml-16 lg:ml-16 lg:mt-16    md:ml-10 mt-4 md:mt-6 group-hover:opacity-0">
              {department.name}
            </h3>
            <button className="absolute w-36 md:w-44 p-1 lg:ml-6 sm:ml-2 ml-4 bottom-4 md:bottom-6 rounded sm:left-2 left-3 lg:left-3 right-0
             bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              Find Doctor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
