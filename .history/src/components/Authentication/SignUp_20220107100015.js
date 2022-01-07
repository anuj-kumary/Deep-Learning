import React from "react";
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
      toast.success("Account created Successful");
      navigate("../About");
    } catch (error) {
      console.log(error.message);
      toast.warn(error.message);
    }
  };

  return (
    <>
      <div className="body">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        className="toast-container"
        toastClassName="dark-toast"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className="container">
          <div className="box">
            <FaRocket className="icon" />
            <p className="title">Welcome to the deafDuo</p>
            <div className="signup-form">
              <input type="text" id="input-name" placeholder="Name" />
              <input
                type="email"
                id="input-email"
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              <input
                type="password"
                id="input-pass"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
              <button onClick={register} type="submit" className="sign-in-btn">
                Create an account
              </button>
              <p className="title">
                Already have account ? <Link to="signin" className="signup">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
