import './AnswerExpandable_module.scss';
import { AnswerCode } from '@/entity/answer';
import { QuestionSvg } from '@/shared/ui/Icon';
import type { AnswerProps } from '@/entity/answer/model/types';
import { useAnswerExpandable } from '@/features/answer-expandable';

export default function AnswerExpandable({ answer }: AnswerProps) {
  const { isOverflowing, isExpanded, isExpandedToggle, longAnswerRef } =
    useAnswerExpandable(answer);
  return (
    <div className='details_answer'>
      <h3 className='details_answer-title'>Развернутый ответ</h3>
      <div
        className={`details_answer-container ${isExpanded ? '' : 'hidden-blok'}`}
        ref={longAnswerRef}
      >
        <AnswerCode answer={answer} />
      </div>
      {isOverflowing && (
        <button
          onClick={isExpandedToggle}
          className={`extension-button ${isExpanded ? '' : 'expanded'}`}
        >
          {isExpanded ? 'Свернуть' : 'Развернуть'}
          <QuestionSvg />
        </button>
      )}
    </div>
  );
}
