import { Link, Outlet } from 'react-router-dom';
import './Art.css';

/* creates options for each link in a nav */
function Option({ name, to }) {
  return (
    <div className='inner-div'>
      <Link className='nav-link' to={to}>{name}</Link>
      <Outlet />
    </div>
  );
}

export default Option;
