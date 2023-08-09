import { Routes, Route, Link, useLocation } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Footer from '/Footer.png'
import Art from './Art'
import CS from './CS'
import Traditional from './Traditional'
import Digital from './Digital'
import Contact from './Contact'
import DarkMode from './DarkMode'

function App() {
  const location = useLocation();

  return (
    <>
    <div className='app-container'>
    <nav className='header-nav'>
      <img className="header-img" src={ Header } alt="the header: blue clouds" />
      <div className="link-container">
  <Link className="home-link" to='/'>Home</Link>
    {location.pathname === '/' && <h1 className='welcome'>Welcome</h1>}
    {location.pathname === '/art' && <h1 className='art'>Art Portfolio</h1>}
    {location.pathname === '/cs' && <h1 className='cs'>CS Projects</h1>}
    {location.pathname !== '/' && <DarkMode />}
  <div className="right-links">
    <Link className="art-link" to='/art'>Art</Link>
    <Link className="cs-link" to='/cs'>CS</Link>
  </div>
</div>

    </nav>
    <div className='route-content'>

    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/art' element={<Art />}>
        <Route path='traditional' element={<Traditional />}/>
        <Route path='digital' element={<Digital />}/>
      </Route>

      <Route path='/cs' element={ <CS /> } />
      <Route path='*' element={<h1>Not Found</h1>}/>
  </Routes>
    </div>
      
      <nav className='footer-nav'>
        <img className='footer-img' src={ Footer } alt="the footer: blue waves" />
        <div className='footer-imgs'>
          <Contact gmailLink={'link-hold'} linkedinLink={'link-hold'} igLink={'link-hold'} discordLink={'link-hold'} githubLink={'link-hold'}
          gmailIcon={'f-img-gmail'} linkedinIcon={'f-img'} igIcon={'f-img'} discordIcon={'f-img'} githubIcon={'f-img'}/>
        </div>
        <p className='footer-text'>Made with leaves • Jaclyn Cohen</p>
      </nav>
    </div>
    </>
  )
}

export default App
