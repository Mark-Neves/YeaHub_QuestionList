import { Routes, Route } from 'react-router-dom';
import Layout from '@/app/layauts';

import { lazy } from 'react';

const Questions = lazy(() => import('@/pages/Questions'));
const QuestionDetails = lazy(() => import('@/pages/QuestionDetails'));
const Collections = lazy(() => import('@/pages/Collections'));
const CollectionDetails = lazy(() => import('@/pages/CollectionDetails'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='questions'>
          <Route index element={<Questions />} />
          <Route path=':id' element={<QuestionDetails />} />
        </Route>
        <Route path='collections'>
          <Route index element={<Collections />} />
          <Route path=':collectionId' element={<CollectionDetails />} />
          <Route path=':collectionId/questions/:id' element={<QuestionDetails />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
