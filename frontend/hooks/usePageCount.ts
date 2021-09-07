import { useAppSelector } from './redux';

const usePageCount = (pageSize: number) => {
  return Math.ceil(useAppSelector(state => state.task.count) / pageSize);
};

export default usePageCount;
