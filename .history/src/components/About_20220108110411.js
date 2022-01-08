import React from 'react'
import { FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
// import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            <div class="wrapper-flex">
                <div class="container">
                <img class="banner-img" src="https://raw.githubusercontent.com/Jean-carje/Profile-card-Practice/master/Profile-card/img/user.jpg" alt="user" />
                <div className="name">
                    <p className='name'>Anujkumar <span>Yadav</span></p>
                </div>
            </div>
            </div>
            </>
    )
}