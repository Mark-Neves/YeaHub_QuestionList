import './answerContainerCode_module.scss';
import type { AnswerProps } from '../../types/questionTypes';

export function AnswerContainerCode({ answer }: AnswerProps) {
  return <div className='answer-container-code' dangerouslySetInnerHTML={{ __html: answer }} />;
}
