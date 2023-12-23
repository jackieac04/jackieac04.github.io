import Web from '/main/Web.png'
import Butterflies from '/main/ButterfliesE.gif'
import Contact from './Contact'
import './Home.css'

/* content of home page displays main img and link icons */
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
            <img className="butterflies" src={ Butterflies } alt="a gif of butterflies overlaying the background image." draggable="false" />
            <Contact gmailLink={'gmail-link'} gmailIcon={'gmail'} linkedinLink={'linkedin-link'} linkedinIcon={'linkedin'} igLink={'ig-link'} igIcon={'ig'}
             discordLink={'discord-link'} discordIcon={'discord'} githubLink={'github-link'} githubIcon={'github'}/>
        </div>
    </div>
  )
}
