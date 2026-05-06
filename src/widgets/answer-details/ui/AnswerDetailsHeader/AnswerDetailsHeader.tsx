import './AnswerDetailsHeader_module.scss';
import Button from '@/shared/ui/Button';
import { FilterButtonSvg } from '@/shared/ui/Icon';

interface AnswerDetailsHeaderProps {
  title: string;
  description: string;
  onClick: () => void;
}
export default function AnswerDetailsHeader({
  title,
  description,
  onClick,
}: AnswerDetailsHeaderProps) {
  return (
    <div className='details_header'>
      <img src='/detailsLogo.png' alt='' className='detalies-img' />
      <div className='details_header-description'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
        </div>
        <Button className='filter-button' onClick={onClick}>
          <FilterButtonSvg />
        </Button>
      </div>
    </div>
  );
}
