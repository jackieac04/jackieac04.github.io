import React from 'react'
import './Art.css'
export default function Art() {
  return (
    <div className='art-main'>
        <div className='nav'>
        <nav>
            <br />
            <br />
            <ul>
                <li> <h1>basic nav bar</h1></li>
            </ul>
        </nav>
        </div>

        <div className='info'>
        <br />
        <div className='about'>
            <h1>About my Work</h1>
            <p>Text describing my art portfolio</p>
            <video src="">My most recent sketchbook</video>
        </div>
        <div className='awards'>
            <h2>Awards</h2>
            <p>awards</p>
        </div>
        <div className='pubs'>
            <h2>Publications and Exhibitions</h2>
            <p>pubs</p>
        </div>
        <div className='features'>
            <h2>Features</h2>
            <p>features</p>
        </div>
    </div>
</div>
        
  )
}
