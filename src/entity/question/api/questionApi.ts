import { baseApi } from '@/shared/api/baseApi';

import type { QuestionItemProps } from '../model/type';
import type { ApiResponse } from '@/shared/model/type';
import type { Params } from '@/features/update-url/lib/searchParamsHelpers';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestion: build.query<ApiResponse<QuestionItemProps[]>, Params>({
      query: (params) => ({
        url: '/questions/public-questions',
        params,
      }),
    }),
    getQuestionsCollectionById: build.query<ApiResponse<QuestionItemProps[]>, number>({
      query: (collectionId) =>
        `/questions/public-questions?page=1&limit=30&collection=${collectionId}`,
    }),
  }),
});

export const { useGetQuestionQuery, useGetQuestionsCollectionByIdQuery } = questionApi;
