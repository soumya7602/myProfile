import React, { useState } from "react";
import '../styles/Navebar.css';
import { FaBars } from "react-icons/fa";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { GrLinkedinOption } from "react-icons/gr";
function Navebar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="Navbar">
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/Project">Service</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nave-box" onClick={toggleSidebar}>
                    <FaBars />
                </div>
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'active' : 'sidebar'}`}>
                <div className="sidebar-body">
                    <h1 className="nave-box" onClick={toggleSidebar}><MdOutlineCloseFullscreen /></h1>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Project">Service</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="learning-icons">
                    <ul>
                        <li><a href="/"><FiGithub /></a></li>
                        <li><a href="/"><CgMail /></a></li>
                        <li><a href="/"><GrLinkedinOption /></a></li>
                        <li><a href="/"><FiGithub /></a></li>
                    </ul>
                </div>

            </div>
        </>

    );
}
export default Navebar;

