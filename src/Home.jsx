import React from 'react'
import Web from '/Web.png'
import Butterflies from '/ButterfliesE.gif'
import Gmail from '/icons/Gmail.png'
import LinkedIn from '/icons/LinkedIn.png'

export default function Home() {
  return (
    <div className='home-container'>
        <img className="web" src={ Web } alt="A digital painting of a girl overlooking a well, surrounded by lush plant life and several animals. The text says: 'About me: 
        Hi there! My name is Jaclyn Cohen, but you can call me Jackie :)
        I'm a visual artist from South Florida, but I am currently based in Providence, Rhode Island where I study computer science at Brown University.
        I'm super interested in the intersections between art and computation, which is why I made this site!
        If you fall further down the well, you'll find my contact info. 
        Definitely send me a message if you can find all of the animals on this page.
        That's all for now; happy exploring!' " />
        <div className='web-content'>
            <img className="butterflies" src={ Butterflies } alt="a gif of butterflies overlaying the background image." />
            <a className='gmail-link' href="mailto: jaclyn_cohen@brown.edu">
                <img  className="gmail" src={ Gmail} alt="the gmail app icon" />
            </a>
            <a className="linkedin-link" href="https://www.linkedin.com/in/jaclyn-cohen-1718a4225/">
                <img className="linkedin" src={ LinkedIn } alt=" the LinkedIn App Logo" />
            </a>
        </div>
        

    </div>
  )
}
