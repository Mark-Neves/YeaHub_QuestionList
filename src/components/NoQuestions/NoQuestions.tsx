import './noQuestion_module.scss';
import type { ResetFilter } from '../../types/filteresTypes';

export function NoQuestions({ resetFilter }: ResetFilter) {
  return (
    <div className='no-questions-container responsive-width-body'>
      <img src='/noQuestions.svg' alt='Пустой список вопросов' loading='lazy' />
      <div className='text'>
        <h3 className='title'>К сожалению, по запросу ничего не найденно.</h3>
        <p>Попробуйте изменить запрос или воспользуйтесь нашими категориями запроса.</p>
      </div>
      <button className='reset-filter' onClick={resetFilter}>
        Сбросить фильтр
      </button>
    </div>
  );
}
