// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       <div
//         className="container nav_bar"
//         data-aos="fade-down"
//         data-aos-duration="1000"
//       >
//         <div className="left nav_items">Portfolio</div>
//         <div className="right">
//           <a href="#home" className="nav_items">
//             Home
//           </a>
//           <a href="#experience" className="nav_items">
//             Experience
//           </a>
//           <a href="#skills" className="nav_items">
//             Skills
//           </a>
//           <a href="#projects" className="nav_items">
//             Projects
//           </a>
//           <a href="#contact" className="nav_items">
//             Contact
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
//import "./Navbar.css"; // Assuming you have CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        
        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        
        {/* Navigation Items */}
        <div className={`right ${isOpen ? "active" : ""}`}>
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
