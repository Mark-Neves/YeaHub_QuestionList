import { Routes, Route } from 'react-router-dom';
import Layout from '@/app/layauts';
import Questions from '@/pages/Questions';
import QuestionDetails from '@/pages/QuestionDetails';
import NotFound from '@/pages/NotFound';

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/questions' element={<Questions />} />
        <Route path='/questions/:id' element={<QuestionDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
