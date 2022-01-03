import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
            <div className="navbar">
                <div className="logo">deafDuo</div>
                <ul>
                    <li> 
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="about">About</Link>
                    </li>
                    <li>
                    <Link to="contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="signin">
                    <ul>
                        <li>
                        <Link to="signin">Log In</Link>
                        </li>
                        <li>
                        <Link to="signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
