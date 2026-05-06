import './AnswerShort_module.scss';
import type { AnswerProps } from '../../model/types';
import { AnswerCode } from '@/entity/answer';

export function AnswerShort({ answer }: AnswerProps) {
  return (
    <div className='details_answer'>
      <h3 className='details_answer-title'>Короткий ответ</h3>
      <AnswerCode answer={answer} />
    </div>
  );
}
