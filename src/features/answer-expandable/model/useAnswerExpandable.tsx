import { useToggle } from '@/shared/lib';
import { useEffect, useRef } from 'react';
export const MAX_HEIGHT = 850;

export const useAnswerExpandable = (answer: string) => {
  const { state: isOverflowing, toggleOn: isOverflowingOn } = useToggle(false);
  const { state: isExpanded, toggle: isExpandedToggle } = useToggle(false);
  const longAnswerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (longAnswerRef.current && longAnswerRef.current?.scrollHeight > MAX_HEIGHT) {
      isOverflowingOn();
    }
  }, [answer, isOverflowingOn]);
  return { isOverflowing, isExpanded, isExpandedToggle, longAnswerRef };
};
