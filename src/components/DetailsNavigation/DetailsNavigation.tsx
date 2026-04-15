import './detailsNavigation_module.scss';
import { QuestionSvg } from '../../UI/QuestionsSvg';
import { Link } from 'react-router-dom';

interface DetailsNavigationProps {
  prevId: string;
  nextId: string;
}
export function DetailsNavigation({ prevId, nextId }: DetailsNavigationProps) {
  return (
    <div className='details_navigation'>
      <Link className='navigation-button prev' to={prevId}>
        <QuestionSvg />
        Предыдущий
      </Link>
      <Link className='navigation-button next' to={nextId}>
        Следующий <QuestionSvg />
      </Link>
    </div>
  );
}
