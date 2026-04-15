import './answerHeader_module.scss';
import { useToggle } from '../../hooks/useToggle';
import { AnswerButtonSvg } from '../../UI/AnswerButtonSvg';
import type { QuestionInfo } from '../../types/questionTypes';
import { AnswerActionsMenu } from '../AnswerActionsMenu/AnswerActionsMenu';
import { AnswerInfo } from '../AnswerInfo/AnswerInfo';

export function AnswerHeader({ id, rate, complexity }: QuestionInfo) {
  const { state: isOpenDetalies, toggle: toggleDetalies, toggleOff } = useToggle(false);

  return (
    <div className='answer-container-header'>
      <AnswerInfo rate={rate} complexity={complexity} />

      <button className='header-button' onClick={toggleDetalies}>
        <AnswerButtonSvg />
      </button>
      {isOpenDetalies && <AnswerActionsMenu id={id} closeMenu={toggleOff} />}
    </div>
  );
}
