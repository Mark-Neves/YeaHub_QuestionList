import { NavLink } from 'react-router-dom';

import './Navigate_module.scss';

import { useNavigate } from '../model/useNavigate';
import { HeaderNavigateButton } from '../../HeaderNavigateButton';
import { navList } from '../model/helpersHeader';

export function Navigate() {
  const { isOpen, toggle, toggleOff, buttonRef, navListRef } = useNavigate();

  return (
    <nav className='navigate-container'>
      <HeaderNavigateButton toggle={toggle} buttonRef={buttonRef} />
      <ul className={`header_navList ${isOpen ? 'nav-list_mobile' : ''}`} ref={navListRef}>
        {navList.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={toggleOff}
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
