import { Header } from '../components/Header/Header';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

export function Layout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Breadcrumbs />
        <main className='main'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
