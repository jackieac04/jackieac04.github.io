import React from 'react';
import Option from './Option';
import './Art.css';
import options from './ArtOptions';

export default function ArtNav() {

 return (
    <>
    <nav className='nav-inner'>
      {options.map(option => (
        <Option key={option.name} optionName={option.name} optElement={option.optElement} subOptions={option.subOptions.map(sub => sub.name)} />
      ))}
    </nav>
    </>
  );
}





