import './openSidebarButton_module.scss';
import { FilterButtonSvg } from '../FilterButtonSvg';
import type { SidebarButtonProps } from '../../types/apiTypes.ts';

export function OpenSidebarButton({ onClick }: SidebarButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      <FilterButtonSvg />
    </button>
  );
}
