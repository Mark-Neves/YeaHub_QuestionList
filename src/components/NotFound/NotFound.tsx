import './notFound_module.scss';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className='not-found_container'>
      <img src='/noQuestions.svg' alt='Пустой список вопросов' loading='lazy' />
      <div className='text'>
        <h2 className='title'>Такой страницы не существует</h2>
      </div>
      <p className='description'>
        Вы можете начать с
        <Link to='/' className='link'>
          Главной
        </Link>
      </p>
    </div>
  );
}
