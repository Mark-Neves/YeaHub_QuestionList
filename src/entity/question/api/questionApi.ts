import { baseApi } from '@/shared/api/baseApi';

import type { GetQuestionParams, QuestionItemProps } from '../model/type';
import type { ApiResponse } from '@/shared/model/type';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestion: build.query<ApiResponse<QuestionItemProps[]>, GetQuestionParams>({
      query: (filters) => {
        const paramsQuestion = new URLSearchParams();
        paramsQuestion.set('limit', '10');

        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            paramsQuestion.set(key, value);
          }
        });
        return `/questions/public-questions?${paramsQuestion.toString()}`;
      },
    }),
  }),
});

export const { useGetQuestionQuery } = questionApi;
