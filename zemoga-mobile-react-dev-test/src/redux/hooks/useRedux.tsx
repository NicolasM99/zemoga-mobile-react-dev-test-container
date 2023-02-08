import { useDispatch, useSelector } from 'react-redux';

export const useRedux = (keys: string[] = []) => {
  const dispatch = useDispatch();
  let selectors = useSelector((state) => state) as any;
  const status = selectors?.status;
  if (!keys.length || !selectors) return [dispatch, {}, status];
  const newSelectors = {} as any;
  keys.forEach((key) => {
    newSelectors[key] = selectors[key];
  });
  selectors = newSelectors;
  return [dispatch, selectors, status] as const;
};
