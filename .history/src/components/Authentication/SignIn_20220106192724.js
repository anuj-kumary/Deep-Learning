import React, { useState } from 'react'
import { AiFillLock } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
          toast.success("Succesfully logged In");
          navigate("../About")
          
        } catch (error) {
            toast.warn(error.message);
            console.log(error.message);
        }
      };

    return (
        <>
        <div className="body">
           <div className="container">
           <ToastContainer />
               <div className="box">
               <AiFillLock className='login-icon' />
                   <p className='title'>Hey, welcome back !!!</p>
                   <div className="login-form">
                       <input type="email"  id="input-email" placeholder='Email'  onChange={(event) => {
            setLoginEmail(event.target.value);
          }} />
                       <input type="password" id="input-pass" placeholder='Password'   onChange={(event) => {
            setLoginPassword(event.target.value);
          }} />
                       <button onClick={login} className='sign-in-btn'>Sign In</button>
                       <p className='title'>Don't have an account ? <span className='signup'>Sign Up</span></p>
                   </div>
               </div>
           </div> 
        </div>
        </>
    )
}
