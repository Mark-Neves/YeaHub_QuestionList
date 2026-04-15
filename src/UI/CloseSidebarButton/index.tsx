import './closeSidebarButton_module.scss';
import type { SidebarButtonProps } from '../../types/apiTypes.ts';

export function CloseSidebarButton({ onClick }: SidebarButtonProps) {
  return (
    <>
      <button onClick={onClick} className='button-close'>
        x
      </button>
    </>
  );
}
