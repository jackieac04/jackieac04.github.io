import { Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Footer from '/Footer.png'
import Art from './Art'
import CS from './CS'
import Traditional from './Traditional'
import Digital from './Digital'
import Contact from './Contact'

function App() {

  return (
    <>
    <div className='app-container'>
    <nav className='header-nav'>
      <img className="header-img" src={ Header } alt="the header: blue clouds" />
      <div className="link-container">
  <Link className="home-link" to='/'>Home</Link>
        <h1>Welcome</h1>
  <div className="right-links">
    <Link className="art-link" to='/art'>Art</Link>
    <Link className="cs-link" to='/cs'>CS</Link>
  </div>
</div>

    </nav>

    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/art' element={<Art />}>
        <Route path='traditional' element={<Traditional />}/>
        <Route path='digital' element={<Digital />}/>
      </Route>

      <Route path='/cs' element={ <CS /> } />
      <Route path='*' element={<h1>Not Found</h1>}/>
  </Routes>
      
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
