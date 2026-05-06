import './AnswerDetailsMenu_module.scss';
import { AnswerActionsMenu } from '@/features/toggle-answer-menu';
import { useToggle } from '@/shared/lib';
import Button from '@/shared/ui/Button';
import { AnswerButtonSvg } from '@/shared/ui/Icon';

type AnswerDetailsMenuProps = {
  answerId: number;
};
export default function AnswerDetailsMenu({ answerId }: AnswerDetailsMenuProps) {
  const { state: isOpenDetails, toggle: toggleDetails, toggleOff } = useToggle(false);

  return (
    <>
      <Button className='header-button' onClick={toggleDetails}>
        <AnswerButtonSvg />
      </Button>

      {isOpenDetails && <AnswerActionsMenu answerId={answerId} closeMenu={toggleOff} />}
    </>
  );
}
