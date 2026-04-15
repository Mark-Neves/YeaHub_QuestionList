import type { QuestionInfo } from '../../types/questionTypes';
import './answerInfo_module.scss';
type AnswerInfoProps = Pick<QuestionInfo, 'rate' | 'complexity'>;
export function AnswerInfo({ rate, complexity }: AnswerInfoProps) {
  return (
    <div className='header-filter'>
      <p className='filter'>
        Рейтинг: <span className='filter-action'>{rate}</span>
      </p>
      <p className='filter'>
        Сложность: <span className='filter-action'>{complexity}</span>
      </p>
    </div>
  );
}
