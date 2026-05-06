import './AnswerNavigate_module.scss';
import { QuestionSvg } from '@/shared/ui/Icon';
import { Link } from 'react-router-dom';
type AnswerNavigateProps = {
  currentId: number;
};
export default function AnswerNavigate({ currentId }: AnswerNavigateProps) {
  const prevId = `/questions/${currentId - 1}`;
  const nextId = `/questions/${currentId + 1}`;
  return (
    <div className='answer_navigation'>
      <Link className='navigation-button prev' to={prevId}>
        <QuestionSvg />
        Предыдущий
      </Link>
      <Link className='navigation-button next' to={nextId}>
        Следующий <QuestionSvg />
      </Link>
    </div>
  );
}
