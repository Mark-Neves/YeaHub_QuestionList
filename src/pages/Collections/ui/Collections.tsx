import FilterCollection from '@/widgets/collection-filter-section';
import CollectionSection from '@/widgets/collections-section';
import Sidebar from '@/widgets/sidebar';
import { useToggle } from '@/shared/lib';

export default function Collections() {
  const { state: isFilterHidden, toggleOn, toggleOff } = useToggle(true);

  return (
    <>
      <CollectionSection filterOpen={toggleOff} />
      <Sidebar isHidden={isFilterHidden} filterClose={toggleOn}>
        <FilterCollection />
      </Sidebar>
    </>
  );
}
