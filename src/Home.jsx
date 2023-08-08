import React from 'react'
import Web from '/Web.png'
import Butterflies from '/ButterfliesE.gif'

export default function Home() {
  return (
    <div className='home-container'>
        <img src={ Web } alt="" />
        <img className="butterflies" src={ Butterflies } alt="" />

    </div>
  )
}
