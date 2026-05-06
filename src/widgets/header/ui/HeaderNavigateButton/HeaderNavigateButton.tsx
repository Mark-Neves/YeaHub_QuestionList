import './HeaderNavigateButton_module.scss';
import { HeaderNavSvg } from '@/shared/ui/Icon';
interface HeaderNavigateButtonProps {
  toggle: () => void;
  buttonRef: React.Ref<HTMLButtonElement> | undefined;
}
export function HeaderNavigateButton({ toggle, buttonRef }: HeaderNavigateButtonProps) {
  return (
    <button className='select_button' onClick={toggle} ref={buttonRef}>
      Подготовка
      <span className='header-nav-mobile'>
        <HeaderNavSvg />
      </span>
    </button>
  );
}
