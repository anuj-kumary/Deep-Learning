import React from 'react';
import { useState } from 'react';

export default function WelcomePage() {
  const [buttonText, setButtonText] = useState(false);
  return (
    <>
      <section className='hero'>
        <div className='fluid-container'>
          <div className='left-side'>
            <button
              onClick={() => setButtonText(!buttonText)}
              className='hero-button'
            >
              {buttonText ? 'Close Gestures' : 'Display Gestures'}
            </button>
          </div>
          <div className={buttonText ? 'left-side' : 'hide-side'}>
            <div className='hero-img'>
              <img src='images/asl.jpg' alt='background' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
