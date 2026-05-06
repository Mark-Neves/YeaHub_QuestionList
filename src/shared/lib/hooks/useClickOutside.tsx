import { useCallback, useEffect, useMemo, useRef, type RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  handler: (event: MouseEvent) => void,
  exception?: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
) => {
  const elementRef = useRef<T>(null);
  const handleRef = useRef<(event: MouseEvent) => void>(handler);

  const refsArray = useMemo((): RefObject<HTMLElement | null>[] => {
    if (!exception) return [];
    return Array.isArray(exception) ? [elementRef, ...exception] : [elementRef, exception];
  }, [exception]);

  const listener = useCallback(
    (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      const isInside = refsArray.some(
        (ref) => ref.current && ref.current.contains(event.target as Node),
      );

      if (!isInside) handleRef.current(event);
    },
    [refsArray],
  );
  useEffect(() => {
    handleRef.current = handler;
  }, [handler]);
  useEffect(() => {
    document.addEventListener('pointerdown', listener);
    return () => document.removeEventListener('pointerdown', listener);
  }, [listener]);
  return elementRef;
};
