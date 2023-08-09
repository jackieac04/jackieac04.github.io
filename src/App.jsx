import './App.css'
import Home from './Home'
import Header from '/Header_.png'
import Footer from '/Footer.png'

function App() {

  return (
    <>
    <div className='app-container'>
    <nav className='header-nav'>
      <img className="header-img" src={ Header } alt="" />
    </nav>
      <Home />
      <nav className='footer-nav'>
        <img className='footer-img' src={ Footer } alt="" />
      </nav>
    </div>
    </>
  )
}

export default App
