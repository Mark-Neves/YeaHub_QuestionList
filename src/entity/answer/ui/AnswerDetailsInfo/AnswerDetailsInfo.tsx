import DetailsInfoItem from '@/shared/ui/DetailsInfoItem';
import type { AnswerDetails } from '../../model/types';
import { AnswerInfo } from '../AnswerInfo/AnswerInfo';

type AnswerWithAction = {
  answer: AnswerDetails;
};
export function AnswerDetailsInfo({ answer }: AnswerWithAction) {
  const { rate, complexity, questionSkills, keywords } = answer;
  return (
    <>
      <DetailsInfoItem title={'Уровень'}>
        <AnswerInfo rate={rate} complexity={complexity} />
      </DetailsInfoItem>
      <DetailsInfoItem title={'Навыки'}>
        <ul className='info-section-list'>
          {questionSkills?.map((skill) => (
            <li key={skill.id} className='skills-item'>
              {skill.title}
            </li>
          ))}
        </ul>
      </DetailsInfoItem>
      <DetailsInfoItem title={'Ключевые слова'}>
        <ul className='info-section-list'>
          {keywords?.map((str) => (
            <li key={str} className='keywords-item'>
              #{str}
            </li>
          ))}
        </ul>
      </DetailsInfoItem>
    </>
  );
}
