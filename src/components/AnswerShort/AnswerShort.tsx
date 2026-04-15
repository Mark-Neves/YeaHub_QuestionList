import './answerShort_module.scss';
import { AnswerContainerCode } from '../AnswerContainerCode/AnswerContainerCode';
import type { AnswerProps } from '../../types/questionTypes';

export function AnswerShort({ answer }: AnswerProps) {
  return (
    <div className='details_answer'>
      <h3 className='details_answer-title'>Короткий ответ</h3>
      <AnswerContainerCode answer={answer} />
    </div>
  );
}
