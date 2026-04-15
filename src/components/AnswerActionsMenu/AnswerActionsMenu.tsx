import { Link } from 'react-router-dom';
import { questionDitalies } from '../helpers';
import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
interface AnswerActionsMenuProps {
  id: number;
  closeMenu: () => void;
}
export function AnswerActionsMenu({ id, closeMenu }: AnswerActionsMenuProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const ditaliesRef = useClickOutside<HTMLLIElement>(closeMenu, linkRef);
  return (
    <ul className='ditalies'>
      {questionDitalies.map((item) => (
        <li key={item} className='ditalies-item' ref={ditaliesRef}>
          <Link ref={linkRef} to={`/questions/${id}`} className='ditalies-item__button'>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
