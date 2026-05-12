import type { Collection } from '../../model/types';
import './CardCollection_module.scss';

type CardCollectionProps = {
  data: Collection;
};
export function CardCollection({ data }: CardCollectionProps) {
  const { title, isFree, keywords, specializations } = data;

  return (
    <div className='card-container card-collection'>
      <img src='/public/CollectionImage.svg' alt='Company logo' />
      <div className='card-collection__body'>
        <ul className='card-collection__body-list'>
          {keywords.map((item) => (
            <li className='skill-item' key={item}>
              {item}
            </li>
          ))}
        </ul>

        <h3 className={'card-collection__body-title'}>{title}</h3>
        <div className='card-collection__body-meta'>
          <span className={isFree ? 'label' : ''}>{isFree ? ` Для участников` : 'Для всех'}</span>
        </div>
        <ul className='card-collection__body-list soft-list'>
          {specializations.map((item) => (
            <li className='soft-item' key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
