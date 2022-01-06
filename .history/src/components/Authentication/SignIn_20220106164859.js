import React, { useState } from 'react'
import { AiFillLock } from "react-icons/ai";

export default function SignIn() {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword]

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

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
                       <button onClick={login} className='sign-in-btn'>Sign In</button>
                       <p className='title'>Don't have an account ? <span className='signup'>Sign Up</span></p>
                   </div>
               </div>
           </div> 
        </div>
        </>
    )
}
