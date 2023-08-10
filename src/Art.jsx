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
          <Route key={option.optElement} path={option.optElement} element={option.component}>
            {option.subOptions.map(subOption => (
              <Route key={subOption.to} path={subOption.to} element={subOption.component} />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}
