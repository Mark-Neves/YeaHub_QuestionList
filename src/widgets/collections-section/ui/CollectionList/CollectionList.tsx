import './CollectionList_module.scss';
import type { Collection } from '@/entity/collection/model/types';
import { CardCollection } from '@/entity/collection/ui';

import { Link } from 'react-router-dom';
type CollectionListProps = {
  collections: Collection[];
};
export function CollectionList({ collections }: CollectionListProps) {
  return (
    <ul className='collection-list'>
      {collections.map((item) => (
        <li key={item.id}>
          <Link to={`/collections/${item.id}`}>
            <CardCollection data={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
