import { Link } from 'react-router-dom';
import { useRef } from 'react';

import './authorization_module.scss';

import { useToggle } from '../../../hooks/useToggle';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { BurgerIcon } from '../../../UI/BurgerIcon';

export function Authorization() {
  const { state: isOpen, toggle, toggleOff } = useToggle(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const authorizationMenuRef = useClickOutside<HTMLDivElement>(toggleOff, buttonRef);

  return (
    <div className='nav-container'>
      <button className='burger-button' onClick={toggle} ref={buttonRef}>
        <BurgerIcon />
      </button>
      <div className={`menu ${!isOpen ? 'hidden' : ''}`} ref={authorizationMenuRef}>
        <Link to='/' onClick={toggleOff} className='header_button'>
          Вход
        </Link>
        <Link to='/' onClick={toggleOff} className='header_button accent'>
          Регистрация
        </Link>
      </div>
    </div>
  );
}
