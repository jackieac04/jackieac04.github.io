import { Link, Outlet } from 'react-router-dom';
import './art.css';

function Option({ name, to }) {

  return (
    <div className='inner-div'>
      <Link className='nav-link' to={to}>{name}</Link>
      <Outlet />
    </div>
  );
}

export default Option;
