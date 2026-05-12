import type { QuestionItemProps } from '@/entity/question/model/type';
import { useGetSpecializationQuery } from '@/entity/specialization/api/specializationApi';
import useUpdateUrl from '@/features/update-url';
import type { ApiResponse } from '@/shared/model/type';

export function useQuestionSection(questions: ApiResponse<QuestionItemProps[]> | undefined) {
  const { params } = useUpdateUrl();
  const { data: specializations } = useGetSpecializationQuery();
  const titleQuestions =
    specializations?.find((specialization) => specialization.id === Number(params.specializationId))
      ?.title ?? 'База вопросов';

  const isEmpty = questions !== undefined && questions.data.length === 0;

  return { titleQuestions, isEmpty };
}
