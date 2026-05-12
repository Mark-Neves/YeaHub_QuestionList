import './AnswerDetails_module.scss';

import AnswerNavigate from '@/features/answer-navigate';
import { AnswerShort } from '@/entity/answer';
import AnswerExpandable from '@/features/answer-expandable';
import type { AnswerDetails } from '@/entity/answer/model/types';
import DetailsHeader from '@/shared/ui/DetailsHeader';

type AnswerDetailsProps = {
  answer: AnswerDetails;
  onClick: () => void;
};
export default function AnswerDetails({ answer, onClick }: AnswerDetailsProps) {
  const { id, title, description, shortAnswer, longAnswer } = answer;
  return (
    <div className='details'>
      <DetailsHeader
        title={title}
        description={description}
        imgUrl={'/detailsLogo.png'}
        onClick={onClick}
      />
      <AnswerNavigate currentId={id} />
      <AnswerShort answer={shortAnswer} />
      <AnswerExpandable answer={longAnswer} />
    </div>
  );
}
