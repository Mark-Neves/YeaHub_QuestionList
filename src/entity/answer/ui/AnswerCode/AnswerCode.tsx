import type { AnswerProps } from '../../model/types';
import './AnswerCode_module.scss';

export function AnswerCode({ answer }: AnswerProps) {
  return <div className='answer-container-code' dangerouslySetInnerHTML={{ __html: answer }} />;
}
