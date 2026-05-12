import QuestionSection from '@/widgets/question-section';
import FilterSection from '@/widgets/filter-section';
import Sidebar from '@/widgets/sidebar';

import { useGetQuestionQuery } from '@/entity/question/api/questionApi';
import useUpdateUrl from '@/features/update-url';
import { useToggle } from '@/shared/lib';

export default function Questions() {
  const { params } = useUpdateUrl();
  const { state: isFilterHidden, toggleOn, toggleOff } = useToggle(true);

  const { data: questions, isFetching, error } = useGetQuestionQuery(params);
  const dataQuestions = { data: questions, isLoading: isFetching, error };

  return (
    <>
      <QuestionSection filterOpen={toggleOff} questionData={dataQuestions} />
      <Sidebar isHidden={isFilterHidden} filterClose={toggleOn}>
        <FilterSection />
      </Sidebar>
    </>
  );
}
