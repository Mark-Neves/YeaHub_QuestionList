import './AnswerActionsMenu_module.scss';
import { Link } from 'react-router-dom';

import { useRef } from 'react';
import { useClickOutside } from '@/shared/lib';
import { questionDitalies } from '../../model/constants';
interface AnswerActionsMenuProps {
  answerId: number;
  closeMenu: () => void;
}
export function AnswerActionsMenu({ answerId, closeMenu }: AnswerActionsMenuProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const ditaliesRef = useClickOutside<HTMLLIElement>(closeMenu, linkRef);
  return (
    <ul className='ditalies'>
      {questionDitalies.map((item) => (
        <li key={item} className='ditalies-item' ref={ditaliesRef}>
          <Link ref={linkRef} to={`/questions/${answerId}`} className='ditalies-item__button'>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
