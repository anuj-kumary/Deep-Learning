import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
export default function Home() {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const naviagateToPage = () => {
    if (authToken) {
      navigate('/welcome');
    } else {
      navigate('/signin');
    }
  };
  return (
    <>
      <section className='hero'>
        <div className='fluid-container'>
          <div className='left-side'>
            <h3 className='section-title'>
              Premium video meetings. Now free for everyone.
            </h3>
            <p className='section-para'>
              We re-engineered the service we build for secure business
              meetings. The Deaf Duo which is free and available for muted
              people and deaf people and get productive.
            </p>
            <button onClick={naviagateToPage} className='hero-button'>
              Get started
            </button>
          </div>
          <div className='left-side'>
            <div className='hero-img'>
              <img src='images/bg.png' alt='background' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
