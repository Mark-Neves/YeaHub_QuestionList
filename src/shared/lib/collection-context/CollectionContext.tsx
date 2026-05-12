import { createContext } from 'react';

type CollectionContextType = {
  collectionId: number;
};

const CollectionContext = createContext<CollectionContextType | null>(null);

export default CollectionContext;
