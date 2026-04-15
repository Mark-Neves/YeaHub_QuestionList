import { Link } from 'react-router-dom';
import './footer_module.scss';
import { FooterLinkList } from '../FooterLinkList/FooterLinkList';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <Link to='/'>
          <img src='/Yeahub-white.svg' alt='Yeahub' />
        </Link>
        <p className='footer_body-accent'>Выбери каким будет IT завтра - вместе с нами!</p>
        <p className='footer_body'>
          YeaHub - это полностью открытый проект, призванный объеденить и улучшить IT-сферу. Наш
          исходный код доступен для изучения на GitHub. Дизайн проект тоже открыт для ознакомления в
          Figma.
        </p>
        <div className='footer_footer'>
          <span className='footer_footer-text'>{new Date().getFullYear()} YeaHub</span>
          <FooterLinkList />
        </div>
      </div>
    </footer>
  );
}
