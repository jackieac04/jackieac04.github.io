import React from 'react'
import './Art.css'
import ArtNav from './ArtNav'
import { Outlet, useLocation, Routes, Route } from 'react-router-dom';
import ArtMainContent from './ArtMainContent';
import options from './ArtOptions';

export default function Art() {
    const location = useLocation()
  return (
    <div className='art-main'>
      <div className='nav'>
        <ArtNav />
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
