import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Questions } from './pages/Questions/Questions';
import { QuestionDetails } from './pages/QuestionDetails/QuestionDetails';
import { NotFound } from './components/NotFound/NotFound';

function App() {
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

export default App;
