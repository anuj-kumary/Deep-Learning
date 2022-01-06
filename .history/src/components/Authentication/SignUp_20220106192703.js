import React from 'react';
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { auth } from "../firebase-config";


export default function SignUp() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
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
                    <FaRocket className='icon' />
                        <p className="title">Welcome to the deafDuo</p>
                        <div className="signup-form">
                        <input type="text"  id="input-name" placeholder='Name' />
                        <input type="email"  id="input-email" placeholder='Email' onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} />
                        <input type="password" id="input-pass" placeholder='Password'  onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} />
                        <button onClick={register}  type="submit" className='sign-in-btn'>Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
