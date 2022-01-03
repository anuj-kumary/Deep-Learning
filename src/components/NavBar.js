import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav>
            <div className="navbar">
                <div className="logo">deafDuo</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <div className="signin">
                    <ul>
                        <li>Log In</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
