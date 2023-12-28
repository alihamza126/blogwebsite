import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  let [open,setopen]=useState(false)
  const isOpen=()=>{
        open=setopen(!open);
        console.log(open)
  }
  return (
    <div className="navbar">
      <div className="left">
        <div className="social-links">
          <a href="https://facebook.com/AliDeveloper126/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/itx.hamza126/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/alihamza126" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      <div className="center" style={{left:open?'-150px':'0'}}>
        <button onClick={isOpen} >X</button>
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>Write</li>
          <li>About us</li>
          <li>Learn</li>
        </ul>
      </div>
      <div className="right">
        <div className="account">
          <img
            src="https://w0.peakpx.com/wallpaper/208/752/HD-wallpaper-whatsapp-dp-cartoon.jpg"
            alt=""
          />
          <div className="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
