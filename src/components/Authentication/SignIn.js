import React, { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import 'react-toastify/dist/ReactToastify.css';
import { signinServices } from '../../service';
import { db } from '../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../../contexts/auth-context';

export default function SignIn() {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const loginHandller = async (e) => {
    e.preventDefault();
    try {
      const response = await signinServices(login.email, login.password);
      const responseUser = response?.user;
      localStorage.setItem('token', JSON.stringify(responseUser?.accessToken));
      localStorage.setItem('user', JSON.stringify(responseUser?.email));
      setAuthToken(responseUser?.accessToken);
      setAuthUser(responseUser?.email);
      const q = query(
        collection(db, 'users'),
        where('uid', '==', responseUser.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userObj = doc.data();
        setAuthUser(userObj);
        localStorage.setItem('user', JSON.stringify(userObj));
      });
      navigate('/welcome');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='body'>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          className='toast-container'
          toastClassName='dark-toast'
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className='container'>
          <div className='box'>
            <AiFillLock className='login-icon' />
            <p className='title'>Hey, welcome back !!!</p>
            <div className='login-form'>
              <input
                type='email'
                id='input-email'
                placeholder='Email'
                onChange={(event) => {
                  setLogin({ ...login, email: event.target.value });
                }}
              />
              <input
                type='password'
                id='input-pass'
                placeholder='Password'
                onChange={(event) => {
                  setLogin({ ...login, password: event.target.value });
                }}
              />
              <button onClick={loginHandller} className='sign-in-btn'>
                Sign In
              </button>
              <p className='title'>
                Don't have an account ?{' '}
                <Link to='/signup' className='signup'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
