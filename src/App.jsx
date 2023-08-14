import { Routes, Route, Link, useLocation } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Header2 from '/Header.png'
import Footer from '/Footer.png'
import ArtMain from './ArtMainContent'
import CSMain from './CSMainContent'
import Contact from './Contact'
import DarkMode from './DarkMode'
import React, { useState } from 'react';
import artOptions from './ArtOptions';
import csOptions from './CSOptions';
import Nav from './Nav.jsx';

function App() {
  const [showArtSubRoutes, setShowArtSubRoutes] = useState(false);
  const [showCSSubRoutes, setShowCSSubRoutes] = useState(false);
  const location = useLocation();

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
        {location.pathname.startsWith('/cs') && <h1 className='cs'>CS Projects</h1>}
  <div className="right-links">

<div 
  className="art-menu-container"
  onMouseEnter={() => setShowArtSubRoutes(true)}
  onMouseLeave={() => setShowArtSubRoutes(false)}
>
  <Link className="art-link" to='/art'>
    Art
  </Link>

  {showArtSubRoutes && (
    <div className="sub-routes">
      <Nav options={artOptions}/>
    </div>
  )}
</div>

<div 
  className="cs-menu-container"
  onMouseEnter={() => setShowCSSubRoutes(true)}
  onMouseLeave={() => setShowCSSubRoutes(false)}
>
  <Link className="cs-link" to='/cs'>
    CS
  </Link>

  {showCSSubRoutes && (
    <div className="sub-routes">
      <Nav options={csOptions}/>
    </div>
  )}
</div>
  </div>
</div>
    <div className='route-content'>

    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/art' element={<ArtMain options={artOptions}/>}/>
      <Route>
        {artOptions.map(option => (
            <Route key={option.name} path={option.to} element={option.component}/>
          ))}
      </Route>

      <Route path='/cs' element={ <CSMain options={csOptions}/> } />
      <Route>
        {csOptions.map(option => (
            <Route key={option.name} path={option.to} element={option.component}/>
          ))}
      </Route>
      <Route path='*' element={<h1>Not Found</h1>}/>
  </Routes>
    </div>
      
      <nav className='footer-nav'>
        <img className='footer-img' src={ Footer } alt="the footer: blue waves">
           </img>
        <div className='footer-imgs'>
          <Contact link={'link-hold'} gmailIcon={'f-img-gmail'} icon={'f-img'}/>
        </div>
        <p className='footer-text'>Made with leafy sheep • Jaclyn Cohen</p>
      </nav>
    </div>
    </>
  )
}

export default App
