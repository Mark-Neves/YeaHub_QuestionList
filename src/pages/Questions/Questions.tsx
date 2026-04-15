import { useToggle } from '../../hooks/useToggle';
import { useQuestionPage } from './useQuestionPage';
import { useQuestionData } from './useQuestionData';

import { QuestionSection } from '../../components/QuestionSection/QuestionSection';
import { FilterSection } from '../../components/FilterSection/FilterSection';

export function Questions() {
  const { state: isFilterHidden, toggleOn: filterClose, toggleOff: filterOpen } = useToggle(true);
  const { filters, resetFilter, updateFilter, updatePage } = useQuestionPage();
  const { specializationsState, skillsState, questionsState, titleQuestions } =
    useQuestionData(filters);

  return (
    <>
      <QuestionSection
        questionsState={questionsState}
        titleQuestions={titleQuestions}
        resetFilter={resetFilter}
        filterOpen={filterOpen}
        updatePage={updatePage}
        page={Number(filters.page)}
      />
      <FilterSection
        specializationsState={specializationsState}
        skillsState={skillsState}
        isFilterHidden={isFilterHidden}
        filterClose={filterClose}
        resetFilter={resetFilter}
        updateFilter={updateFilter}
        filters={filters}
      />
    </>
  );
}
