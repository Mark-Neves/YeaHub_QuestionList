import { useClickOutside } from '../../hooks/useClickOutside';
import type { SidebarProps } from '../../types/filteresTypes';
import './sidebar_module.scss';

export function Sidebar({ children, isHidden, filterClose }: SidebarProps) {
  const closeSidebarRef = useClickOutside<HTMLTableSectionElement>(filterClose, []);

  return (
    <section className={`section-filter  ${isHidden ? '' : 'open-filter'}`} ref={closeSidebarRef}>
      {children}
    </section>
  );
}
