import React from 'react';
import Option from './Option';
import './Art.css';
import options from './ArtOptions';

export default function ArtNav() {

 return (
    <>
    <nav className='nav-inner'>
      {options.map(option => (
        <Option key={option.name} name={option.name} to={option.to} />
      ))}
    </nav>
    </>
  );
}





