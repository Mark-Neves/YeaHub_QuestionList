import './AnswerDetailsMenu_module.scss';
import { AnswerActionsMenu } from '@/features/toggle-answer-menu';
import { useToggle } from '@/shared/lib';
import useCollectionContext from '@/shared/lib/collection-context/useCollectionContext';
import Button from '@/shared/ui/Button';
import { AnswerButtonSvg } from '@/shared/ui/Icon';

type AnswerDetailsMenuProps = {
  answerId: number;
};
export default function AnswerDetailsMenu({ answerId }: AnswerDetailsMenuProps) {
  const { state: isOpenDetails, toggle: toggleDetails, toggleOff } = useToggle(false);
  const collection = useCollectionContext();
  const collectionId = collection?.collectionId;
  const to = collectionId
    ? `/collections/${collectionId}/questions/${answerId}`
    : `/questions/${answerId}`;

  return (
    <>
      <Button className='header-button' onClick={toggleDetails}>
        <AnswerButtonSvg />
      </Button>

      {isOpenDetails && <AnswerActionsMenu to={to} closeMenu={toggleOff} />}
    </>
  );
}
