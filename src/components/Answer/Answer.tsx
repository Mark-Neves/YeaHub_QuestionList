import './answer_module.scss';
import type { QuestionInfo } from '../../types/questionTypes';
import { AnswerContainerCode } from '../AnswerContainerCode/AnswerContainerCode';
import { AnswerHeader } from '../AnswerHeader/AnsverHeader';

type AnswerProp = QuestionInfo & {
  shortAnswer: string;
  isOpen: boolean;
};
export function Answer({ id, rate, complexity, shortAnswer, isOpen }: AnswerProp) {
  return (
    <div className={`answer-container ${isOpen ? 'open-card' : 'hidden-card'}`}>
      <AnswerHeader id={id} rate={rate} complexity={complexity} />
      <AnswerContainerCode answer={shortAnswer} />
    </div>
  );
}
