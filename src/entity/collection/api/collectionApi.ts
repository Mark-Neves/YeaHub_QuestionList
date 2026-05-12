import { baseApi } from '@/shared/api/baseApi';
import type { ApiResponse } from '@/shared/model/type';
import type { Collection } from '../model/types';
import type { Params } from '@/features/update-url/lib/searchParamsHelpers';

const collectionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCollections: build.query<ApiResponse<Collection[]>, Params>({
      query: (params) => ({
        url: '/collections/public',
        params,
      }),
    }),
    getCollectionById: build.query<Collection, number>({
      query: (colletionId) => `/collections/${colletionId}/public`,
    }),
  }),
});

export const { useGetCollectionsQuery, useGetCollectionByIdQuery } = collectionApi;
