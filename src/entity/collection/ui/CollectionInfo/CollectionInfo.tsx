import DetailsInfoItem from '@/shared/ui/DetailsInfoItem/ui/DetailsInfoItem';
import type { Collection } from '../../model/types';

type CollectionInfoProps = {
  collection: Collection;
};
export function CollectionInfo({ collection }: CollectionInfoProps) {
  const { specializations, isFree, company, keywords } = collection;
  return (
    <>
      <DetailsInfoItem title={'Специализация'}>
        <ul className='info-section-list'>
          {specializations?.map((specialization) => (
            <li className='filter-item' key={specialization.id}>
              {specialization.title}
            </li>
          ))}
        </ul>
      </DetailsInfoItem>

      <DetailsInfoItem title={'Доступ'}>
        <span className='filter-item'>{isFree ? 'Для участников' : 'Для всех'}</span>
      </DetailsInfoItem>

      <DetailsInfoItem title={'Компания'}>
        <span className='skills-item'>{company.title}</span>
      </DetailsInfoItem>

      <DetailsInfoItem title={'Ключевые слова'}>
        <ul className='info-section-list'>
          {keywords?.map((item) => (
            <li className='keywords-item' key={item}>
              #{item}
            </li>
          ))}
        </ul>
      </DetailsInfoItem>
    </>
  );
}
