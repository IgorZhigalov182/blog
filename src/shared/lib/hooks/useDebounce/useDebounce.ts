import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, ms: number) {
  const timerRef = useRef(null) as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => callback(...args), ms);
    },
    [callback, ms],
  );
}
