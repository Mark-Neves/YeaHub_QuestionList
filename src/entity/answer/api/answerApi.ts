import { baseApi } from '@/shared/api/baseApi';
import type { AnswerDetails } from '../model/types';

export const answerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAnswerById: build.query<AnswerDetails, number>({
      query: (questionId) => `/questions/public-questions/${questionId}`,
    }),
  }),
});

export const { useGetAnswerByIdQuery } = answerApi;
