import React from 'react';
import { FaRocket } from "react-icons/fa";


export default function SignUp() {
    return (
        <>
            <div className="body">
                <div className="container">
                    <div className="box">
                    <FaRocket className='icon' />
                        <p className="title">Welcome to the deafDuo</p>
                        <div className="signup-form">
                        <input type="text"  id="input-name" placeholder='Name' />
                        <input type="email"  id="input-email" placeholder='Email' />
                        <input type="password" id="input-pass" placeholder='Password' />
                        <button className='sign-in-btn'>Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
