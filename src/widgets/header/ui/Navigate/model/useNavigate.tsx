import { useClickOutside, useToggle } from '@/shared/lib';
import { useRef } from 'react';

export function useNavigate() {
  const { state: isOpen, toggle, toggleOff } = useToggle(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navListRef = useClickOutside<HTMLUListElement>(toggleOff, buttonRef);
  return { isOpen, toggle, toggleOff, buttonRef, navListRef };
}
