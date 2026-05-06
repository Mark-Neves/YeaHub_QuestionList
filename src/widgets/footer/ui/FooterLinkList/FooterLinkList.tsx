import './FooterLinkList_module.scss';

import { Link } from 'react-router-dom';
import { footerLinkList } from '../../model/helpers';

export function FooterLinkList() {
  return (
    <ul className='footer_linkList'>
      {footerLinkList.map((item) => (
        <li key={item.name}>
          <Link to={item.path} aria-label={`Перейти на ${item.name}`}>
            {item.logo ? <img src={item.logo} alt={`Перейти на ${item.name}`} /> : item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
