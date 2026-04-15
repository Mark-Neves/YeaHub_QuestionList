import { Link } from 'react-router-dom';
import type { LinkList } from '../../types/apiTypes.ts';
interface FooterLinkProps {
  link: LinkList;
}
export function FooterLink({ link }: FooterLinkProps) {
  return (
    <Link to={link.path} aria-label={`Перейти на ${link.name}`}>
      {link.logo ? <img src={link.logo} alt={`Перейти на ${link.name}`} /> : link.name}
    </Link>
  );
}
