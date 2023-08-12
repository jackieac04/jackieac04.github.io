import React from 'react'
import './Art.css'
import { Outlet, useLocation } from 'react-router-dom';
import ArtMainContent from './ArtMainContent';
import CSMainContent from './CSMainContent';

export default function Art() {
    const location = useLocation()
  return (
    <>
    <div className='art-main'>
      {location.pathname === '/cs' && <CSMainContent />}
      {location.pathname === '/art' && <ArtMainContent />}
    </div>
    <Outlet />
    </>
  );
}
