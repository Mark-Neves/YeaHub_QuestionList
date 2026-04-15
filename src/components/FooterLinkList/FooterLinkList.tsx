import './footerLinkList_module.scss';
import { footerLinkList } from '../helpers';
import { FooterLink } from '../FooterLink/FooterLink';

export function FooterLinkList() {
  return (
    <ul className='footer_linkList'>
      {footerLinkList.map((item) => (
        <li key={item.name}>
          <FooterLink link={item} />
        </li>
      ))}
    </ul>
  );
}
