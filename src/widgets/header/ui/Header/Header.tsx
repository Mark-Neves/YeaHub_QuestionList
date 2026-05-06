import './Header_module.scss';

import { Link } from 'react-router-dom';
import { Navigate } from '../Navigate/ui/Navigate';
import { Authorization } from '../Authorization/Authorization';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header_navContainer'>
          <Link to='/' className='header_logo'>
            <img src='/logo.svg' alt='Yeahub logo icon' />
            <img src='/Yeahub.svg' alt='Yeahub' />
          </Link>
          <Navigate />
        </div>
        <Authorization />
      </div>
    </header>
  );
}
