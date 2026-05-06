import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  label?: string;
};
function Button({ children, label, ...props }: ButtonProps) {
  return <button {...props}>{children || label}</button>;
}

export default Button;
