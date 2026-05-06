import type { Children } from '@/shared/model/type';
import { BrowserRouter } from 'react-router-dom';

export function ProviderRouter({ children }: Children) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
