import { useCallback, useMemo, useState } from 'react';

interface bindFunctions {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

type useHoverResult = [boolean, bindFunctions];

export function useHover(): useHoverResult {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => setIsHover(true), []);

  const onMouseLeave = useCallback(() => setIsHover(false), []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
}
