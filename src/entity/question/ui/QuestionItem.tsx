import type { Children } from '@/shared/model/type';
import type { QuestionBasa } from '../model/type';

import './QuestionItem_module.scss';

type QuestionItemProps = Pick<QuestionBasa, 'title'> & Children;

export default function QuestionItem({ title, children }: QuestionItemProps) {
  return (
    <div className='question-card'>
      <h2 className='question-card_title'>{title}</h2>
      {children}
    </div>
  );
}
