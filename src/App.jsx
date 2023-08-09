import { Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Footer from '/Footer.png'
import Art from './Art'
import CS from './CS'
import Traditional from './Traditional'
import Digital from './Digital'

function App() {

  return (
    <>
    <div className='app-container'>
    <nav className='header-nav'>
      <img className="header-img" src={ Header } alt="" />
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
        <img className='footer-img' src={ Footer } alt="" />
      </nav>
    </div>
    </>
  )
}

export default App
