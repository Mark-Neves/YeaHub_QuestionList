import './detailsInfo_module.scss';

import { CloseSidebarButton } from '../../UI/CloseSidebarButton';
import type { QuestionDetails } from '../../types/questionTypes';
import { AnswerInfo } from '../AnswerInfo/AnswerInfo';

type DetaliesInfoProps = Pick<
  QuestionDetails,
  'rate' | 'complexity' | 'questionSkills' | 'keywords'
> & { onClick: () => void };

export function DetailsInfo({
  rate,
  complexity,
  questionSkills,
  keywords,
  onClick: onClose,
}: DetaliesInfoProps) {
  return (
    <>
      <CloseSidebarButton onClick={onClose} />
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
