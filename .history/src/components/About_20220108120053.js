import React from 'react'
import { FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            <div class="wrapper-flex">
            {
               
                Authors.map((data) => {
                    return(
                        <div class="profile-container">
                <img class="profile-img" src={data.img} alt="user" />
                    <p className='name'>{data.name}</p>
                    <small>{data.Role}</small>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat cum molestiae totam, possimus dolores facere autem.</p>
                    <footer>
                        <div className="social-icon">
                            <FaGithub />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </footer>
            </div>
                    )
                })
            }
                
            </div>
            </>
    )
}