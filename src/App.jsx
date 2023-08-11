import { Routes, Route, Link, useLocation } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Header2 from '/Header.png'
import Footer from '/Footer.png'
import Main from './ArtCSMain'
import Contact from './Contact'
import DarkMode from './DarkMode'
import React, { useEffect } from 'react';
import artOptions from './ArtOptions';
import csOptions from './CSOptions';

function App() {
  const location = useLocation();
  useEffect(() => {
    // Get the height of .route-content
    const routeContentHeight = document.querySelector('.route-content').offsetHeight;
    const headerContentHeight = document.querySelector('.header-nav').offsetHeight;
    // Set the height as a CSS variable on the body
    document.body.style.setProperty('--route-content-height', `${routeContentHeight}px`);
    document.body.style.setProperty('--header-content-height', `${headerContentHeight}px`);
    // Optional: Update the height on window resize
    const handleResize = () => {
      const updatedHeight = document.querySelector('.route-content').offsetHeight;
      document.body.style.setProperty('--route-content-height', `${updatedHeight}px`);
      const headerContentHeight = document.querySelector('.header-nav').offsetHeight;
      document.body.style.setProperty('--header-content-height', `${headerContentHeight}px`);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
    <div className='app-container'>
    <nav className='header-nav'>
      <img className="header-img" src={ Header } alt="the header: blue clouds" />
    </nav>
    <img className="header-img-2" src={ Header2 } alt="the header: blue clouds" />
    <div className="link-container">
        <Link className="home-link" to='/'>Home</Link>
        {location.pathname !== '/' && <DarkMode />}
        {location.pathname === '/' && <h1 className='welcome'>Welcome</h1>}
        {location.pathname.startsWith('/art') && <h1 className='art'>Art Portfolio</h1>}
        {location.pathname === '/cs' && <h1 className='cs'>CS Projects</h1>}
  <div className="right-links">
    <Link className="art-link" to='/art'>Art</Link>
    <Link className="cs-link" to='/cs'>CS</Link>
  </div>
</div>
    <div className='route-content'>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/art/*' element={<Main options={artOptions}/>}/>
      <Route path='/cs/*' element={ <Main options={csOptions}/> } />
      <Route path='*' element={<h1>Not Found</h1>}/>
  </Routes>
    </div>
      
      <nav className='footer-nav'>
        <img className='footer-img' src={ Footer } alt="the footer: blue waves">
           </img>
        <div className='footer-imgs'>
          <Contact gmailLink={'link-hold'} linkedinLink={'link-hold'} igLink={'link-hold'} discordLink={'link-hold'} githubLink={'link-hold'}
          gmailIcon={'f-img-gmail'} linkedinIcon={'f-img'} igIcon={'f-img'} discordIcon={'f-img'} githubIcon={'f-img'}/>
        </div>
        <p className='footer-text'>Made with leafy sheep • Jaclyn Cohen</p>
      </nav>
    </div>
    </>
  )
}

export default App
