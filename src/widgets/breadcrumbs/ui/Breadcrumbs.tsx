import './Breadcrumbs_module.scss';
import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../model/useBreadcrumbs';

export default function Breadcrumbs() {
  const { breadcrumbs } = useBreadcrumbs();
  return (
    <nav className='breadcrumbs'>
      {breadcrumbs.map((crumb, i) =>
        i === breadcrumbs.length - 1 ? (
          <span className='breadcrumbs_text' key={crumb.path}>
            {crumb.label}
          </span>
        ) : (
          <Link
            to={crumb.path}
            key={crumb.path}
            className='breadcrumbs_link'
          >{`${crumb.label} > `}</Link>
        ),
      )}
    </nav>
  );
}
