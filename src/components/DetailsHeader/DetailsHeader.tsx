import './detailsHeader_module.scss';
import { OpenSidebarButton } from '../../UI/OpenSidebarButton';

interface DetailsHeaderProps {
  title: string;
  description: string;
  onClick: () => void;
}
export function DetailsHeader({ title, description, onClick }: DetailsHeaderProps) {
  return (
    <div className='details_header'>
      <img src='/detailsLogo.png' alt='' className='detalies-img' />
      <div className='details_header-description'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
        </div>
        <OpenSidebarButton onClick={onClick} />
      </div>
    </div>
  );
}
