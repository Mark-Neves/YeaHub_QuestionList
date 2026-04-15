import { useEffect, useState } from 'react';
import type { FetchState } from '../types/apiTypes.ts';

export function useFetcher<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ data: null, isLoading: true, error: null });

  useEffect(() => {
    if (!url) {
      return;
    }
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    const controller = new AbortController();
    const fetcher = async (): Promise<void> => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Ошибка');
        const fetchResponse = (await response.json()) as T;

        setState({ data: fetchResponse, isLoading: false, error: null });
      } catch (e) {
        if (e instanceof Error) {
          if (e.name === 'AbortError') return;
          setState((prev) => ({ ...prev, isLoading: false, error: e.message }));
        }
      }
    };
    fetcher();
    return () => controller.abort();
  }, [url]);
  return state;
}
