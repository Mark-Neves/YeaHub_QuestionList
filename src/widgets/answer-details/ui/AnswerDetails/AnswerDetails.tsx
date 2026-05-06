import './AnswerDetails_module.scss';
import type { AnswerWithAction } from '@/entity/answer/model/types';

import AnswerDetailsHeader from '../AnswerDetailsHeader/AnswerDetailsHeader';
import AnswerNavigate from '@/features/answer-navigate';
import { AnswerShort } from '@/entity/answer';
import AnswerExpandable from '@/features/answer-expandable';

export default function AnswerDetails({ answer, onClick }: AnswerWithAction) {
  const { id, title, description, shortAnswer, longAnswer } = answer;
  return (
    <div className='details'>
      <AnswerDetailsHeader title={title} description={description} onClick={onClick} />
      <AnswerNavigate currentId={id} />
      <AnswerShort answer={shortAnswer} />
      <AnswerExpandable answer={longAnswer} />
    </div>
  );
}
