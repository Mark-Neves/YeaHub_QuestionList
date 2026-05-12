import './DetailsHeader_module.scss';
import Button from '@/shared/ui/Button';
import { FilterButtonSvg } from '@/shared/ui/Icon';

interface DetailsHeaderProps {
  title: string;
  description: string;
  imgUrl: string;
  onClick: () => void;
}
export default function DetailsHeader({ title, description, imgUrl, onClick }: DetailsHeaderProps) {
  return (
    <div className='details_header'>
      <img src={imgUrl} alt='' className='detalies-img' />
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
