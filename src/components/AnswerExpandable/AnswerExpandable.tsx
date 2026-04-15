import './answerExpandable_module.scss';
import { useEffect, useRef } from 'react';

import { AnswerContainerCode } from '../AnswerContainerCode/AnswerContainerCode';
import { useToggle } from '../../hooks/useToggle';
import { QuestionSvg } from '../../UI/QuestionsSvg';
import type { AnswerProps } from '../../types/questionTypes';

export function AnswerExpandable({ answer }: AnswerProps) {
  const { state: isLong, toggleOn: isLongOn } = useToggle(false);
  const { state: isExpanded, toggle: isExpandedToggle } = useToggle(false);
  const longAnswerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (longAnswerRef.current && longAnswerRef.current?.scrollHeight > 850) {
      isLongOn();
    }
  }, [answer, isLongOn]);
  return (
    <div className='details_answer'>
      <h3 className='details_answer-title'>Развернутый ответ</h3>
      <div
        className={`details_answer-container ${isExpanded ? '' : 'hidden-blok'}`}
        ref={longAnswerRef}
      >
        <AnswerContainerCode answer={answer} />
      </div>
      {isLong && (
        <button
          onClick={isExpandedToggle}
          className={`extension-button ${isExpanded ? '' : 'hidden'}`}
        >
          {isExpanded ? 'Свернуть' : 'Развернуть'}
          <QuestionSvg />
        </button>
      )}
    </div>
  );
}
