import {useEffect, useRef, MutableRefObject} from 'react';

export const useClickOutside = <T extends HTMLElement>(
  handler: () => void,
): MutableRefObject<T | null> => {
  const ref = useRef<T | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]);

  return ref;
};
