import { useToggle } from '@/shared/lib/hooks/useToggle';
import { useQuestionPage } from '../model/useQuestionPage';

import QuestionSection from '@/widgets/question-section';
import FilterSection from '@/widgets/filter-section';
import Sidebar from '@/widgets/sidebar';

export default function Questions() {
  const { state: isFilterHidden, toggleOn: filterClose, toggleOff: filterOpen } = useToggle(true);
  const { filters } = useQuestionPage();

  return (
    <>
      <QuestionSection filters={filters} filterOpen={filterOpen} />
      <Sidebar isHidden={isFilterHidden} filterClose={filterClose}>
        <FilterSection filterClose={filterClose} filters={filters} />
      </Sidebar>
    </>
  );
}
