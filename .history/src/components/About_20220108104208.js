import React from 'react'
import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            {
                Authors.map((data) => {
                    return(
                        <div className="grid-box" key={data.id}>
                        <div className="author-details">
                        <p>{data.name}</p>
                        <p>{data.Role}</p>
                        </div>

                        </div> 
                      
                    )
                })
            }
        </>
    )
}
