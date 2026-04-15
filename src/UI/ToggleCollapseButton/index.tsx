import './toggleCollapseButton_module.scss';

interface ToggleCollapseButton {
  state: boolean;
  toggle: () => void;
}
export function ToggleCollapseButton({ state, toggle }: ToggleCollapseButton) {
  return (
    <button className='filter-list--button' onClick={toggle}>
      {state ? 'Посмотреть все' : 'Скрыть'}
    </button>
  );
}
