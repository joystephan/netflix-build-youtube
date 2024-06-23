import React, { useState, useEffect } from "react";
import "./Nav.css";


function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if (window.scrollY > 100) {
    handleShow(true);
  } else {
    handleShow(false)
  }
}

useEffect(() => {
   window.addEventListener("scroll", transitionNavBar);
   return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
     <div className="nav__contents">
     <img className="nav__logo" 
       src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png"
       alt="" 
      />
     <img className="nav__avatar" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&s" 
       alt="" 
     />
     </div>
    </div>
  )
}

export default Nav
