import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/auth-context';
import { signupServices } from '../../service';

export default function SignUp() {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
  });
  const signupHandler = async (name, email, password) => {
    try {
      const response = await signupServices(email, password);
      const responseUser = response?.user;

      localStorage.setItem('token', JSON.stringify(responseUser?.accessToken));
      localStorage.setItem('token', JSON.stringify(responseUser?.email));
      setAuthToken(responseUser?.accessToken);
      setAuthUser(responseUser?.email);
      navigate('/welcome');
      return response;
    } catch (error) {
      console.error(error);
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
            <FaRocket className='icon' />
            <p className='title'>Welcome to the deafDuo</p>
            <div className='signup-form'>
              <input
                type='text'
                placeholder='Name'
                onChange={(event) => {
                  setSignup({ ...signup, name: event.target.value });
                }}
              />
              <input
                type='email'
                id='input-email'
                placeholder='Email'
                onChange={(event) => {
                  setSignup({ ...signup, email: event.target.value });
                }}
              />
              <input
                type='password'
                id='input-pass'
                placeholder='Password'
                onChange={(event) => {
                  setSignup({ ...signup, password: event.target.value });
                }}
              />
              <button
                onClick={() =>
                  signupHandler(signup.name, signup.email, signup.password)
                }
                type='submit'
                className='sign-in-btn'
              >
                Create an account
              </button>
              <p className='title'>
                Already have account ?{' '}
                <Link to='/signin' className='signup'>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
