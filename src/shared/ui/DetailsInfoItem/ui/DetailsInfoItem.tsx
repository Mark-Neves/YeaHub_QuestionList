import type { ReactNode } from 'react';
import './DetailsInfoItem_module.scss';
type DetailsInfoItemProps = {
  title: string;
  children: ReactNode;
};
export default function DetailsInfoItem({ title, children }: DetailsInfoItemProps) {
  return (
    <div>
      <p className='title-filter'>{title}:</p>
      {children}
    </div>
  );
}
