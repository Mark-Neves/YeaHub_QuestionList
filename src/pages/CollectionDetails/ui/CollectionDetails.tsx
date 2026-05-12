import { CollectionInfo } from '@/entity/collection/ui';
import DataBoundary from '@/shared/ui/DataBoundary';
import Sidebar from '@/widgets/sidebar';
import { useCollectionDetails } from '../model/useCollectionDetails';
import CollectionDetailsContent from '@/widgets/collection-details-content';
import SkeletonCollection from './SkeletonCollection';
import CollectionContext from '@/shared/lib/collection-context';

export default function CollectionDetails() {
  const { dataQuestions, dataCollection, isSidebarHidden, sidebarClose, sidebarOpen } =
    useCollectionDetails();
  const { collectionInfo, isLoadingCollection, error } = dataCollection;

  return (
    <DataBoundary
      data={collectionInfo}
      isLoading={isLoadingCollection}
      error={error}
      skeleton={<SkeletonCollection />}
    >
      {(collectionInfo) => (
        <CollectionContext.Provider value={{ collectionId: collectionInfo.id }}>
          <CollectionDetailsContent
            title={collectionInfo.title}
            description={collectionInfo.description}
            sidebarOpen={sidebarOpen}
            dataQuestions={dataQuestions}
          />

          <Sidebar isHidden={isSidebarHidden} filterClose={sidebarClose}>
            <CollectionInfo collection={collectionInfo} />
          </Sidebar>
        </CollectionContext.Provider>
      )}
    </DataBoundary>
  );
}
