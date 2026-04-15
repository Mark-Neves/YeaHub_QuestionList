import { useMemo } from 'react';
import {
  DEFAULT_SPECIALIZATION_ID,
  normalizeData,
  SPECIALIZATION_LIMIT,
  SPECIALIZATION_PAGE,
} from '../../components/helpers';
import { useFetcher } from '../../hooks/useFetcher';
import type {
  ApiResponse,
  FetchState,
  ResponseResult,
  Skill,
  Specialization,
} from '../../types/apiTypes.ts';
import type { Filters } from '../../types/filteresTypes.ts';
import type { QuestionListItem } from '../../types/questionTypes.ts';

export function useQuestionData(filters: Filters) {
  //Получение специализаций

  const {
    data: specializationsData,
    isLoading: specializationIsLoading,
    error: specializationError,
  } = useFetcher<ApiResponse<Specialization[]>>(
    `/specializations?page=${SPECIALIZATION_PAGE}&limit=${SPECIALIZATION_LIMIT}`,
  );
  const specializations = specializationsData?.data ? normalizeData(specializationsData.data) : [];

  const specializationsState: ResponseResult<Specialization[]> = {
    data: specializations,
    isLoading: specializationIsLoading,
    error: specializationError,
  };

  //Получение навыков

  const {
    data: skillsData,
    isLoading: skillsIsLoading,
    error: skillsError,
  } = useFetcher<ApiResponse<Skill[]>>(
    `/skills?specializations=${filters.specializationID ?? DEFAULT_SPECIALIZATION_ID}`,
  );
  const skills = useMemo(() => {
    return skillsData?.data ? normalizeData(skillsData.data) : [];
  }, [skillsData]);

  const skillsState: ResponseResult<Skill[]> = {
    data: skills,
    isLoading: skillsIsLoading,
    error: skillsError,
  };

  // Получение вопросов

  const paramsQuestion = new URLSearchParams();
  paramsQuestion.set('limit', '10');

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === 'string' && value.length > 0) {
      paramsQuestion.set(key, value);
    }
  });
  const {
    data: question,
    isLoading: isLoadingQuestion,
    error: errorQuestion,
  } = useFetcher<ApiResponse<QuestionListItem[]>>(
    `/questions/public-questions?${paramsQuestion.toString()}`,
  );

  const questionsState: FetchState<ApiResponse<QuestionListItem[]>> = {
    data: question,
    isLoading: isLoadingQuestion,
    error: errorQuestion,
  };

  //Заголовок специализации

  const titleQuestions =
    specializations.find((specialization) => specialization.id === Number(filters.specializationID))
      ?.title || 'База вопросов';

  return {
    specializationsState,
    skillsState,
    questionsState,
    titleQuestions,
  };
}
