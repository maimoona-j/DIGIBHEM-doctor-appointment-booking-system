// import React, { useState, useEffect } from "react";
// import BestDoctor from "../Components/BestDoctor";
// import Categories from "../Components/Categories";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import Landing from "../Components/Landing";
// import Services from "../Components/Services";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <Landing />
//       <Services />
//       <BestDoctor />
//       <Categories />
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect } from "react";
// import BestDoctor from "../Components/BestDoctor";
// import Categories from "../Components/Categories";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import Landing from "../Components/Landing";
// import Services from "../Components/Services";

// export default function Home() {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".animate-on-scroll");

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-slide-in");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.2, // Adjust the threshold as needed
//     });

//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Landing />
//       <Services className="animate-on-scroll" />
//       <BestDoctor className="animate-on-scroll" />
//       <Categories className="animate-on-scroll" />
//       <Footer />
//     </div>
//   );
// }






import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useState, useEffect } from "react";
import BestDoctor from "../Components/BestDoctor";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Landing from "../Components/Landing";
import Services from "../Components/Services";

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust the threshold as needed
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  

  return (
    <div    >
      <Header />
    
    
      <Landing   />
      <Services   />
      <BestDoctor   />
      <Categories   />
      <Footer   />
   
    
    </div>
  );
}

 