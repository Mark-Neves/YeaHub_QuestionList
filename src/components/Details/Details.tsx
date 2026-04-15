import './detalies_module.scss';

import { DetailsHeader } from '../DetailsHeader/DetailsHeader';
import { DetailsNavigation } from '../DetailsNavigation/DetailsNavigation';
import { AnswerShort } from '../AnswerShort/AnswerShort';
import { AnswerExpandable } from '../AnswerExpandable/AnswerExpandable';
import { useParams } from 'react-router-dom';
import type { QuestionDetails } from '../../types/questionTypes';

type DetailsProps = Pick<
  QuestionDetails,
  'title' | 'description' | 'shortAnswer' | 'longAnswer'
> & { onClick: () => void };

export function Details({ title, description, shortAnswer, longAnswer, onClick }: DetailsProps) {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const currentId = Number(id);
  const prevId = `/questions/${currentId - 1}`;
  const nextId = `/questions/${currentId + 1}`;
  return (
    <div className='details'>
      <DetailsHeader title={title} description={description} onClick={onClick} />
      <DetailsNavigation prevId={prevId} nextId={nextId} />
      <AnswerShort answer={shortAnswer} />
      <AnswerExpandable answer={longAnswer} />
    </div>
  );
}
