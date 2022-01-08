import React from 'react'
import Authors from './Author'

export default function About() {
    return (
        <>
            <h3>Authors</h3>
            {
                Authors.map((data) => {
                    return(
                        <div className="grid">
                        <p>{data.name}</p>
                        <p>{data.name}</p>
                        </div> 
                      
                    )
                })
            }
        </>
    )
}
