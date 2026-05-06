import { store } from '@/app/store/store';
import type { Children } from '@/shared/model/type';
import { Provider } from 'react-redux';

export function StoreProvider({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}
