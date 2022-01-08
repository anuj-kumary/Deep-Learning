import React from 'react'
import { FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
// import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            <div class="wrapper-flex">
                <div class="profile-container">
                <div className="banner-img"></div>
                <img class="profile-img" src="https://raw.githubusercontent.com/Jean-carje/Profile-card-Practice/master/Profile-card/img/user.jpg" alt="user" />
                    <p className='name'>Anujkumar <span>Yadav</span></p>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat cum molestiae totam, possimus dolores facere autem.</p>

                    <footer>
                        <div className="social-icon">
                            <FaGithub />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </footer>
            </div>
            </div>
            </>
    )
}