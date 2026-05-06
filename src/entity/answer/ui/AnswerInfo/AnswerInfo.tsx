import './AnswerInfo_module.scss';
import type { AnswerDetails } from '../../model/types';

type AnswerInfoProps = Pick<AnswerDetails, 'rate' | 'complexity'>;

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
