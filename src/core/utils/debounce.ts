import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export interface PropTypes {
  func: (...args: any[]) => void;
  delay?: number;
}

export const useDebounce = ({ func, delay = 1000 }: PropTypes) => {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (...args: any[]) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return debouncedFunction;
};
