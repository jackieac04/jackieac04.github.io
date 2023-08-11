import React from 'react'
import './Art.css'
import Nav from './Nav'
import { Outlet, useLocation, Routes, Route } from 'react-router-dom';
import ArtMainContent from './ArtMainContent';

export default function Art({options}) {
    const location = useLocation()
  return (
    <div className='art-main'>
      <div className='nav'>
        <Nav options={options}/>
        <Outlet />
      </div>

      {location.pathname === '/art' && <ArtMainContent />}
      <Routes>
        {options.map(option => (
          <Route key={option.name} path={option.to} element={option.component}/>
        ))}
      </Routes>
    </div>
  );
}
