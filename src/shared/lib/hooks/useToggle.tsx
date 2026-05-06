import { useState, useCallback } from 'react';

interface UseToggleReturn {
  state: boolean;
  toggle: () => void;
  toggleOn: () => void;
  toggleOff: () => void;
}
export function useToggle(initialValue: boolean): UseToggleReturn {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  const toggleOn = useCallback(() => {
    setState(true);
  }, []);
  const toggleOff = useCallback(() => {
    setState(false);
  }, []);
  return { state, toggle, toggleOn, toggleOff };
}
