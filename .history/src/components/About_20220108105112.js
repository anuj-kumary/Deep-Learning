import React from 'react'
import { FaGithub } from "react-icons/fa";
// import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            <section className="top-card">
                <img src="https://raw.githubusercontent.com/Jean-carje/Profile-card-Practice/master/Profile-card/img/user.jpg" alt="user" />
                <div className="name">
                    <p>Anujkumar <span>Yadav</span></p>
                </div>
            </section>

            <footer>
                <h2>Contact</h2>
                <a href='google.com' className='social-icon'><FaGithub /></a>
            </footer>
        </>
    )
}
