import React from 'react';
import Option from './Option';
import './Art.css';

/* creates nav bars for art and cs drop downs */
export default function Nav({options}) {
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





