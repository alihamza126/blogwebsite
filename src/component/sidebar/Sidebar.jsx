import "./sidebar.scss";
import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="title">
                <h3>About Us</h3>
            </div>
            <div className="about-img">
                <img
                    src="https://w0.peakpx.com/wallpaper/208/752/HD-wallpaper-whatsapp-dp-cartoon.jpg"
                    alt="this is aboout image "
                />
            </div>
            <div className="intro">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ullam. Distinctio minima quam, iusto repudiandae tempora saepe doloribus ipsa fugiat quia sit!</p>
            </div>
            <div className="title">
                <h3>Catagories</h3>
            </div>
            <div className="catagories">
                <ul>
                    <li>Life Style</li>
                    <li>Journey</li>
                    <li>Education</li>
                    <li>Technology</li>
                </ul>
            </div>
            <div className="title">
                <h3>Follow Us</h3>
            </div>
            <div className="social-links">
                <a href="https://facebook.com/AliDeveloper126/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/itx.hamza126/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/alihamza126" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    );
};

export default Sidebar;
