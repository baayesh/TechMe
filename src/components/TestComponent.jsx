// import React from "react";
// import "./styles/TestComponent.css";
// import { useState } from "react";

// const TestComponent = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  

//   const menuOnClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//     console.log("clicked")
//   };
//   return (
//     <div>
//       <div id="menu" className="side-menu">
//         <div id="menu-bar" className={isMenuOpen ? "t1 change" : "t1"} onClick={menuOnClick}>
//           <div id="bar1" className="bar"></div>
//           <div id="bar2" className="bar"></div>
//           <div id="bar3" className="bar"></div>
//         </div>  
//         <nav className={isMenuOpen ? "nav change" : "nav"} id="nav" >
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//             <li>
//               <a href="#">Blog</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <div className={isMenuOpen?"change-bg menu-bg" : "menu-bg"} id="menu-bg"></div>
//     </div>
//   );
// };

// export default TestComponent;
