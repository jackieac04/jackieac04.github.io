import React from 'react'
import tetris from '/cssub/tetris.gif'
import susman from '/cssub/susman.gif'
import MP7 from '/cssub/MP7.gif'
import MP9 from '/cssub/MP9.gif'
import Web from '/main/Web.png'
import './Art.css'

/* content displayed on the mian cs page */
export default function CSMainContent() {
  return (
    <>
    <div className='cs-main'>
        <div className='info'>
        <h1>About my Work</h1>
        <p className='cs-text'>
        Although my cs journey started quite recently compared to my artistic one, I have many interests that I'm exploring.
        I'm drawn to the visual side of computer science- web development, UI/UX design, graphics – anything that combines the logic of coding with visual creativity resonates with me. 
        I'm also interested in how we can make technology both functional and aesthetically pleasing and user-friendly. 
        <br />
        <br />
        After the end of freshman year, I began as a research assistant at <a href="https://sites.brown.edu/bltlab/">The Brown Language and Thought Lab</a> under <a href="https://www.gaborbrody.com/">Gabor Brody</a>. 
        I love working on projects that are used to help people and further our knowledge of the mind!
        <br />
        <br />
        When I'm not coding or painting you'll probably find me exploring my surroundings or collecting little <a href="https://www.instagram.com/birbsatbrown/">birbs</a> or other trinkets, which is why I'm currntly woking on
        <a href='/cs/poster'>The Brown Poster Archive</a>, in an attempt to catalog and document the history of student events, priorities, and design choices over time at Brown. 
        <br />
        <br />
        Heading into sophomore year and the rest of college, I'm so excited to see what more I'll learn, in my courses and also as a Teaching Assistant for <a href="https://cs.brown.edu/courses/cs015/">CS 15</a> this fall.
        Thanks for reading! Check out some recent projects I've been working on below :)
        </p>
         </div>
         <div className='sub-links'>
            <a className='link' href="/cs/this">
                <img className='gif one' src={Web} />
            </a>
            
         <a className='link' href="/cs/tetrissus">
            <img className='gif one' src={tetris} />
            <img className='gif one' src={susman} />
        </a>
        <a className='link' href="/cs/mp">
            <img className='gif MP7' src={MP7} />
            <img className='gif MP7' src={MP9} />
        </a>
        <a className='link' href="/cs/dttp">
            <img className='gif dt' src="/cssub/dt.gif" />
            <img className='gif tp' src="/cssub/tp.png" />
        </a>
         </div>
      </div>
    </>
  )
}
