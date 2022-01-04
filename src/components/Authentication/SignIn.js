import React from 'react'
import { AiFillLock } from "react-icons/ai";

export default function SignIn() {
    return (
        <>
        <div className="body">
           <div className="container">
               <div className="box">
               <AiFillLock className='login-icon' />
                   <p className='title'>Hey, welcome back !!!</p>
                   <div className="login-form">
                       <input type="email"  id="input-email" placeholder='Email' />
                       <input type="password" id="input-pass" placeholder='Password' />
                       <button className='sign-in-btn'>Sign In</button>
                       <p className='title'>Don't have an account ? <span className='signup'>Sign Up</span></p>
                   </div>
               </div>
           </div> 
        </div>
        </>
    )
}
