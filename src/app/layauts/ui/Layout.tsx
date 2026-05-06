import Header from '@/widgets/header';
import Breadcrumbs from '@/widgets/breadcrumbs';
import { Outlet } from 'react-router-dom';
import Footer from '@/widgets/footer';

export default function Layout() {
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
