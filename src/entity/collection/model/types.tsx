type CreateByCollections = {
  id: string;
  username: string;
};
type CompanyCollection = {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string;
  inn: string;
  kpp: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreateByCollections;
};
type SpecializationCollection = {
  id: number;
  title: string;
  description: string;
  imageSrc: null;
  createdAt: string;
  updatedAt: string;
};

type URLCollectionParams = 'isFree' | 'specializations' | 'text';
export type GetCollectionApi = Record<URLCollectionParams, string>;

export type Collection = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreateByCollections;
  isFree: boolean;
  keywords: string[];
  company: CompanyCollection;
  questionsCount: number;
  tasksCount: number;
  specializations: SpecializationCollection[];
};

export type CollectionSectionProps = {
  filterOpen: () => void;
};
