import './questionsList_module.scss';
import type { QuestionListItem } from '../../types/questionTypes';

import { QuestionCard } from '../QuestionCard/QuestionCard';
import { OpenSidebarButton } from '../../UI/OpenSidebarButton';

interface QuestionsListProps {
  questions: QuestionListItem[];
  title: string;
  onOpenFilter: () => void;
}
export function QuestionsList({ questions, title, onOpenFilter }: QuestionsListProps) {
  if (!questions) return null;
  return (
    <>
      <div className='questions_header'>
        <h1 className='questions_header-title'>{title}</h1>
        <OpenSidebarButton onClick={onOpenFilter} />
      </div>
      <ul className='questions_card-list'>
        {questions.map((question) => (
          <li key={question.id} className='card-container'>
            <QuestionCard
              id={question.id}
              title={question.title}
              rate={question.rate}
              complexity={question.complexity}
              shortAnswer={question.shortAnswer}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
