import React from 'react'
import { FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
// import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            <main>
            <section className="top-card">
                <img src="https://raw.githubusercontent.com/Jean-carje/Profile-card-Practice/master/Profile-card/img/user.jpg" alt="user" />
                <div className="name">
                    <p>Anujkumar <span>Yadav</span></p>
                </div>
            </section>

            <footer>
                <h2>Contact</h2>
                <a href='google.com' className='social-icon'><FaGithub /></a>
                <a href="http://" className='social-icon'><FaLinkedin /></a>
                <a href="http://" className='social-icon'><FaTwitter/></a>
            </footer>
            <section className="top-card">
                <img src="https://raw.githubusercontent.com/Jean-carje/Profile-card-Practice/master/Profile-card/img/user.jpg" alt="user" />
                <div className="name">
                    <p>Anujkumar <span>Yadav</span></p>
                </div>
            </section>

            <footer>
                <h2>Contact</h2>
                <a href='google.com' className='social-icon'><FaGithub /></a>
                <a href="http://" className='social-icon'><FaLinkedin /></a>
                <a href="http://" className='social-icon'><FaTwitter/></a>
            </footer>
            </main>
            </>
    )
}