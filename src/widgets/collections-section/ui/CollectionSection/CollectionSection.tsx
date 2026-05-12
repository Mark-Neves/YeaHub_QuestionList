import './CollectionSection_module.scss';
import { useGetCollectionsQuery } from '@/entity/collection/api/collectionApi';
import Pagination from '@/features/pagination-question';
import DataBoundary from '@/shared/ui/DataBoundary';
import Button from '@/shared/ui/Button';
import { FilterButtonSvg } from '@/shared/ui/Icon';
import type { CollectionSectionProps } from '@/entity/collection/model/types';
import { CollectionList } from '../CollectionList/CollectionList';
import useUpdateUrl from '@/features/update-url';
import SkeletonCollectionSection from '../SkeletonCollectionSection';

export default function CollectionSection({ filterOpen }: CollectionSectionProps) {
  const { params } = useUpdateUrl();
  const { data: collections, isFetching, error } = useGetCollectionsQuery(params);

  return (
    <section className='body-section collection'>
      <div className='header-collection'>
        <h2 className='header-collection-title'>Коллекции</h2>
        <Button onClick={filterOpen} className='open-sidebar'>
          <FilterButtonSvg />
        </Button>
      </div>
      <DataBoundary
        data={collections}
        isLoading={isFetching}
        error={error}
        skeleton={<SkeletonCollectionSection />}
      >
        {(collections) => (
          <>
            <CollectionList collections={collections.data} />
            <Pagination
              total={collections.total}
              limit={collections.limit}
              page={collections.page}
            />
          </>
        )}
      </DataBoundary>
    </section>
  );
}
