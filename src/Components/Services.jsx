// import React from "react";
// import {
//   FaUsers,
//   FaUserMd,
//   FaUserCheck,
//   FaLongArrowAltRight,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Services() {
//   React.useEffect(() => {
//     AOS.init({
//       duration: 800,
//     });

//     return () => {
//       AOS.refresh();
//     };
//   }, []);
//   return (
//     <div className="  h-[500px]" data-aos="fade-up">
//       <div className="mt-36 ml-24 flex text-blue-800 ">
//         <div className="border border-blue-800 w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800  ">
//           <FaUsers className="text-8xl ml-36 mt-16 " />
//           <h3 className="mt-3 text-xl font-bold ml-[140px]">Find Doctor</h3>
//         </div>
//         <FaLongArrowAltRight className="mt-36 text-6xl" />
//         <div className="border border-blue-800 w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800 ">
//           <FaUserMd className="text-8xl ml-36 mt-16" />
//           <h3 className="mt-3 text-xl font-bold ml-[140px]">View Profile</h3>
//         </div>
//         <FaLongArrowAltRight className="mt-36 text-6xl" />
//         <div className="border border-blue-800 w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800  ">
//           <FaUserCheck className="text-8xl ml-36 mt-16" />
//           <h3 className="mt-3 text-xl font-bold ml-[90px]">
//             Book an Appointment
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import {
//   FaUsers,
//   FaUserMd,
//   FaUserCheck,
//   FaLongArrowAltRight,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Services() {
//   React.useEffect(() => {
//     AOS.init({
//       duration: 800,
//     });

//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   return (
//     <div className="h-auto md:h-[500px]" data-aos="fade-up">
//       <div className="mt-10 md:mt-36 mx-2 md:mx-24 flex flex-col md:flex-row text-blue-800">
//         <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
//           <FaUsers className="text-8xl ml-10 mt-16 md:ml-36 md:mt-16" />
//           <h3 className="mt-3 text-xl font-bold text-center md:text-left">
//             Find Doctor
//           </h3>
//         </div>
//         <FaLongArrowAltRight className="mt-10 md:mt-36 text-6xl mx-4 md:mx-10" />
//         <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
//           <FaUserMd className="text-8xl ml-10 mt-16 md:ml-36 md:mt-16" />
//           <h3 className="mt-3 text-xl font-bold text-center md:text-left">
//             View Profile
//           </h3>
//         </div>
//         <FaLongArrowAltRight className="mt-10 md:mt-36 text-6xl mx-4 md:mx-10" />
//         <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
//           <FaUserCheck className="text-8xl ml-10 mt-16 md:ml-36 md:mt-16" />
//           <h3 className="mt-3 text-xl font-bold text-center md:text-left">
//             Book an Appointment
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import {
  FaUsers,
  FaUserMd,
  FaUserCheck,
  FaLongArrowAltRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="h-auto md:h-[500px]" data-aos="fade-up">
      <div className="mt-10 md:mt-36 mx-2 md:mx-24 flex flex-col md:flex-row text-blue-800">
        <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
          <FaUsers className="text-8xl   ml-2 mt-16 md:ml-[120px] md:mt-16" />
          <h3 className="mt-3 text-xl lg:ml-[110px] font-bold text-center md:text-left">
            Find Doctor
          </h3>
        </div>
        <FaLongArrowAltRight className="mt-10 md:mt-36 text-6xl mx-4 md:mx-10" />
        <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
          <FaUserMd className="text-8xl ml-10 mt-16 md:ml-[120px] md:mt-16" />
          <h3 className="mt-3 lg:ml-[110px] text-xl font-bold text-center md:text-left">
            View Profile
          </h3>
        </div>
        <FaLongArrowAltRight className="mt-10 md:mt-36 text-6xl mx-4 md:mx-10" />
        <div className="border border-blue-800 w-full md:w-96 h-[320px] m-3 rounded shadow-lg hover:transition-shadow hover:shadow-lg hover:shadow-blue-800">
          <FaUserCheck className="text-8xl ml-10 mt-16 md:ml-[120px] md:mt-16" />
          <h3 className="mt-3 text-xl lg:ml-[70px] font-bold text-center md:text-left">
            Book an Appointment
          </h3>
        </div>
      </div>
    </div>
  );
}
