import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

import './navigate_module.scss';
import { navList } from '../../helpers';
import { HeaderNavSvg } from '../../../UI/HeaderNavSvg';

import { useToggle } from '../../../hooks/useToggle';
import { useClickOutside } from '../../../hooks/useClickOutside';

export function Navigate() {
  const { state: isOpen, toggle, toggleOff } = useToggle(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navListRef = useClickOutside<HTMLUListElement>(toggleOff, buttonRef);

  return (
    <nav className='navigate-container'>
      <button className='select_button' onClick={toggle} ref={buttonRef}>
        Подготовка
        <span className='header-nav-mobile'>
          <HeaderNavSvg />
        </span>
      </button>
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
