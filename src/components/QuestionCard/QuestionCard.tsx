import { useToggle } from '../../hooks/useToggle';
import { QuestionSvg } from '../../UI/QuestionsSvg';
import { Answer } from '../Answer/Answer';
import './questionCard_module.scss';
interface QuestionCardProps {
  id: number;
  title: string;
  rate: number;
  complexity: number;
  shortAnswer: string;
}

export function QuestionCard({ id, title, rate, complexity, shortAnswer }: QuestionCardProps) {
  const { state: isOpen, toggle } = useToggle(false);
  return (
    <>
      <div className='question-card'>
        <h2 className='question-card_title'>{title}</h2>
        <button className={`question-card_button ${isOpen ? '' : 'open'}`} onClick={toggle}>
          <QuestionSvg />
        </button>
      </div>

      <Answer
        id={id}
        rate={rate}
        complexity={complexity}
        shortAnswer={shortAnswer}
        isOpen={isOpen}
      />
    </>
  );
}
