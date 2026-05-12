import type { QuestionItemProps } from '@/entity/question/model/type';
import './QuestionsList_module.scss';

import QuestionCard from '@/features/question-expandable';
import Button from '@/shared/ui/Button';
import { FilterButtonSvg } from '@/shared/ui/Icon';
import useCollectionContext from '@/shared/lib/collection-context/useCollectionContext';

interface QuestionsListProps {
  questions: QuestionItemProps[];
  title: string;
  onOpenFilter: () => void;
}
export default function QuestionsList({ questions, title, onOpenFilter }: QuestionsListProps) {
  const collection = useCollectionContext();
  if (!questions) return null;
  return (
    <>
      <div className='questions_header'>
        <h1 className='questions_header-title'>{title}</h1>
        {!collection && (
          <Button onClick={onOpenFilter} className='open-sidebar'>
            <FilterButtonSvg />
          </Button>
        )}
      </div>
      <ul className='questions_card-list'>
        {questions.map((question) => (
          <li key={question.id} className='card-container'>
            <QuestionCard question={question} />
          </li>
        ))}
      </ul>
    </>
  );
}
