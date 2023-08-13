import React from 'react'
import './cssub.css'

export default function CSSubContent({name, imgs, tech, desc, prev, next }) {
  return (
    <>
    <div className='sub-main'>
        <div className='title'>
        <h1>{name}</h1>
        </div>
        <div className='imgs'>
        {imgs.map((img, index) => (
                <img className='img' key={index} src={img} />
            ))}
        </div>
        <div className='tech'>
            <h2>tech: </h2> <p>{tech}</p>
        </div>
        <div className='title'>
            <h1>Description</h1>
        </div>
        <div className='desc'>
            {desc}
        </div>
        <div className="buttons">
            <button className='btn'>
                <a href={prev}> Previous </a>
            </button>
            <button className='btn a'>
                <a href={next}> Next </a>
            </button>
        </div>
    </div>
    </>
  )
}
