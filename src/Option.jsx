import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Art.css';

function SubOption({ to, children }) {
  return (
    <div className="submenu-item">
      <Link to={to}>{children}</Link>
    </div>
  );
}

function Option({ optionName, optElement, subOptions }) {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className='inner-div'
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
    >
      <Link className='nav-link' to={optElement}>{optionName}</Link>
      {activeMenu && (
        <div className="submenu">
          {subOptions.map((subOption, index) => (
            <SubOption key={index} to={subOption.to}>
              {subOption.name}
            </SubOption>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Option;
