// import React from "react";
// import doc1 from "../images/doc1.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function BestDoctor() {
//   React.useEffect(() => {
//     AOS.init({
//       duration: 800,
//     });

//     return () => {
//       AOS.refresh();
//     };
//   }, []);
//   return (
//     <div data-aos="fade-up">
//       <h1 className="text-4xl text-bold text-blue-800 ml-[530px] mb-8">
//         Best Doctor of the week
//       </h1>
//       <div className="bg-blue-800 relative h-96 ">
//         <div className="absolute ">
//           <img
//             src={doc1}
//             alt="doctor"
//             className="ml-[1100px]  w-[415px] h-[385px] rounded-md"
//           />
//         </div>
//         <div className="absolute bottom-10 left-[400px] ">
//           <h1 className="text-4xl text-white ml-12 ">Dr David Steve</h1>
//           <p className="text-sm mt-2 text-red-600 ml-12 md:text-left">
//             Neurologist <br />
//             M.B.B.S, F.C.P.S (Neurology) <br />
//           </p>
//           <p className="w-96 text-white mt-4">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
//             facilis ipsa in aspernatur. Ipsam, mollitia voluptatum enim
//             expedita, itaque deserunt iure molestias, aut eligendi sunt ad eum
//             animi voluptate sed!
//           </p>
//           <button className="bg-red-600 ml-24 hover:bg-gray-400 hover:text-black text-white text-bold h-12 p-3 rounded mt-3">
//             Book an Appointmen
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import doc1 from "../images/doc1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BestDoctor() {
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
      <h1 className="text-4xl lg:mb-4 font-bold text-blue-800 mt-8 text-center md:ml-20">
        Best Doctor of the week
      </h1>
      <div className="bg-blue-800 relative   h-auto sm:h-[400px] md:h-[400px]">
        <div className="md:absolute inset-0 md:w-1/2 md:flex">
          <img
            src={doc1}
            alt="doctor"
            className="w-full h-auto md:w-96 md:h-[385px] rounded-md"
          />
        </div>
        <div className="md:absolute lg:ml-[500px] inset-0 md:w-1/2 md:pl-10 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl text-white mb-2 md:ml-0 md:mb-4">
            Dr David Steve
          </h1>
          <p className="text-sm text-red-600 md:text-left">
            Neurologist <br />
            M.B.B.S, F.C.P.S (Neurology) <br />
          </p>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            facilis ipsa in aspernatur. Ipsam, mollitia voluptatum enim
            expedita, itaque deserunt iure molestias, aut eligendi sunt ad eum
            animi voluptate sed!
          </p>
          <button className="bg-red-600 hover:bg-gray-400 hover:text-black text-white font-bold h-12 p-3 rounded mt-3 md:ml-0">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
