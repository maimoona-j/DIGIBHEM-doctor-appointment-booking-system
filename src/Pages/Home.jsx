// import React from "react";
 

// import Header from "../Components/Header";
// import Landing from "../Components/Landing";

// export default function Home() {
  

//   return (
//     <div>
//       <Header />
//       <Landing />
      
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Landing from "../Components/Landing";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <Landing />
      {showWelcome && (
        <div className="welcome-popup">
          <p>Welcome back!</p>
        </div>
      )}
    </div>
  );
}
