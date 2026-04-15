import { Link } from 'react-router-dom';
import './errorMessage_module.scss';
interface ErrorProps {
  hasFiltersError: boolean;
}
export function ErrorMessage({ hasFiltersError }: ErrorProps) {
  return (
    <div className='error'>
      {hasFiltersError ? (
        <p className='error-description'>Обновите странницу</p>
      ) : (
        <>
          <h3 className='error-title'>Произошла ошибка!</h3>
          <p className='error-description'>Проверте соединение и перезагрузите страницу</p>
          <Link to='/questions' className='error-link'>
            На страницу вопросов
          </Link>
        </>
      )}
    </div>
  );
}
