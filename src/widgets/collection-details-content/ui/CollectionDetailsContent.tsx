import './CollectionDetailsContent_module.scss';
import type { QuestionItemProps } from '@/entity/question/model/type';

import type { ApiResponse, FetchState } from '@/shared/model/type';
import DetailsHeader from '@/shared/ui/DetailsHeader';
import QuestionSection from '@/widgets/question-section';

type CollectionDetailsContentProps = {
  dataQuestions: FetchState<ApiResponse<QuestionItemProps[]>>;
  title: string;
  description: string;
  sidebarOpen: () => void;
};

export default function CollectionDetailsContent({
  dataQuestions,
  title,
  description,
  sidebarOpen,
}: CollectionDetailsContentProps) {
  return (
    <div className='collection-details__container'>
      <div>
        <DetailsHeader
          title={title}
          description={description}
          imgUrl={'/CollectionImage.svg'}
          onClick={sidebarOpen}
        />
      </div>

      <QuestionSection filterOpen={sidebarOpen} questionData={dataQuestions} />
    </div>
  );
}
