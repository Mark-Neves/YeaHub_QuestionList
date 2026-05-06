import './AnswerDetailsInfo_module.scss';
import type { AnswerWithAction } from '../../model/types';

import { AnswerInfo } from '../AnswerInfo/AnswerInfo';
import Button from '@/shared/ui/Button';

export function AnswerDetailsInfo({ answer, onClick: onClose }: AnswerWithAction) {
  const { rate, complexity, questionSkills, keywords } = answer;
  return (
    <>
      <Button className='button-close' onClick={onClose} label={'x'} />
      <div className='detalies-info_container'>
        <div className='level'>
          <p className='title-filter'>Уровень:</p>
          <AnswerInfo rate={rate} complexity={complexity} />
        </div>

        <div className='skill'>
          <p className='title-filter'>Навыки:</p>
          <ul className='skills-list'>
            {questionSkills?.map((skill) => (
              <li key={skill.id} className='skills-item'>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='keywords'>
          <p className='title-filter'>Ключевые слова:</p>
          <ul className='keywords-list'>
            {keywords?.map((str) => (
              <li key={str} className='keywords-item'>
                #{str}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
