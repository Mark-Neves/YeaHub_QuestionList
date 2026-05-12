import { baseApi } from '@/shared/api/baseApi';
import { normalizeData } from '@/shared/lib/normalize';

import type { ApiResponse, Skill } from '@/shared/model/type';

const DEFAULT_SPECIALIZATION_ID = 11;

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<Skill[] | undefined, string>({
      query: (specializationId) =>
        `/skills?specializations=${specializationId ?? DEFAULT_SPECIALIZATION_ID}`,
      transformResponse: (result: ApiResponse<Skill[]>) => normalizeData(result.data),
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
