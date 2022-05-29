import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { useAuth } from '../contexts/auth-context';

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const { authToken, authUser, setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const toggleHamburger = () => {
    setToggle(!toggle);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthToken('');
    setAuthUser(null);
    navigate('/');
  };

  return (
    <>
      <nav>
        <div className='navbar'>
          <div className='logo'>deafDuo</div>
          <ul className={toggle ? 'mobile-menu-link' : 'menu-links'}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
            {authToken ? (
              <>
                <li className='sign-up-btn'>
                  <Link to='signin'>{authUser}</Link>
                </li>
                <li onClick={logoutHandler} className='sign-up-btn'>
                  <Link to='signin'>LogOut</Link>
                </li>
              </>
            ) : (
              <>
                <li className='sign-up-btn'>
                  <Link to='signin'>Log In</Link>
                </li>
                <li className='sign-up-btn'>
                  <Link to='signup'>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
          <div className='hamburger'>
            <FaAlignJustify onClick={toggleHamburger} />
          </div>
        </div>
      </nav>
    </>
  );
}
