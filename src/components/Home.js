import React from "react";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="fluid-container">
          <div className="left-side">
            <h3 className="section-title">
              Premium video meetings. Now free for everyone.
            </h3>
            <p className="section-para">
              We re-engineered the service we build for secure business
              meetings. The Deaf Duo which is free and available for muted
              people and deaf people and get productive.
            </p>
              <button className="hero-button">Get started</button>
          </div>
          <div className="left-side">
            <div className="hero-img">
              <img src="images/bg.png" alt="background" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
