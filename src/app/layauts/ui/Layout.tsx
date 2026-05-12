import Header from '@/widgets/header';
import Breadcrumbs from '@/widgets/breadcrumbs';
import { Outlet } from 'react-router-dom';
import Footer from '@/widgets/footer';
import { Suspense } from 'react';
import Loader from '@/shared/ui/Loader/ui/Loader';

export default function Layout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Breadcrumbs />
        <main className='main'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
