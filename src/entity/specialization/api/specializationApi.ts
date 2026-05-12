import { baseApi } from '@/shared/api/baseApi';
import { SPECIALIZATION_LIMIT, SPECIALIZATION_PAGE } from '@/shared/lib/constants';
import { normalizeData } from '@/shared/lib/normalize';

import type { ApiResponse, Specialization } from '@/shared/model/type';

const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecialization: build.query<Specialization[] | undefined, void>({
      query: () => `/specializations?page=${SPECIALIZATION_PAGE}&limit=${SPECIALIZATION_LIMIT}`,
      transformResponse: (response: ApiResponse<Specialization[]>) => normalizeData(response.data),
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
