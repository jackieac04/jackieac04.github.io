import React from 'react'

export default function Home() {
  return (
    // displays the main BG img and overlaying gif
    <div className='home-container'>
        <img className="home" src="src/assets/images/HomePage.png" alt="A digital painting of a girl looking down a well. She is surrounded by plants and animals. Halfway down the well, text reads: About Me. 
        Hi there! My name is Jaclyn Cohen but you can call me Jackie :)
        I'm a visual artist from South Florida, but I am currently based in Providence, Rhode Island where I study computer science at Brown University.
        I'm super interested in the intersections between art and computation, which is why I made this site!
        If you fall further down the well, you'll find my contact info.
        Definitely send me a message if you can find all of the animals on this page.
        That's all for now; happy exploring!" />
        <img className='butterfly-gif' src="src/assets/images/butterflies.gif" alt="an animation of two butterflies flying in opposite directions across the screen" />
    </div>
  )
}
