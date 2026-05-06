import './QuestionCard_module.scss';
import type { QuestionItemProps } from '@/entity/question/model/type';
import { useToggle } from '@/shared/lib/hooks/useToggle';
import { AnswerCode, AnswerInfo } from '@/entity/answer';
import AnswerDetailsMenu from '@/features/toggle-answer-menu';
import QuestionItem from '@/entity/question';
import { QuestionSvg } from '@/shared/ui/Icon';

interface QuestionCardProps {
  question: QuestionItemProps;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const { id, title, rate, complexity, shortAnswer } = question;
  const { state: isOpen, toggle } = useToggle(false);
  return (
    <>
      <QuestionItem title={title}>
        <button className={`question-card_button ${isOpen ? '' : 'open'}`} onClick={toggle}>
          <QuestionSvg />
        </button>
      </QuestionItem>

      <div className={`answer-container ${isOpen ? 'open-card' : 'hidden-card'}`}>
        <div className='answer-container-header'>
          <AnswerInfo rate={rate} complexity={complexity} />
          <AnswerDetailsMenu answerId={id} />
        </div>
        <AnswerCode answer={shortAnswer} />
      </div>
    </>
  );
}
