import './Sidebar_module.scss';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import type { Children } from '@/shared/model/type';

export interface SidebarProps extends Children {
  isHidden: boolean;
  filterClose: () => void;
}

export default function Sidebar({ children, isHidden, filterClose }: SidebarProps) {
  const closeSidebarRef = useClickOutside<HTMLTableSectionElement>(filterClose, []);

  return (
    <section className={`section-filter  ${isHidden ? '' : 'open-filter'}`} ref={closeSidebarRef}>
      {children}
    </section>
  );
}
