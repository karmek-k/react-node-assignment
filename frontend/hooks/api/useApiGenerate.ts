import { generateTasks } from '../../resources/task';

const useApiGenerate = () => {
  return (count: number) => {
    generateTasks(count).then(() =>
      alert('Tasks have been generated. Please refresh the page.')
    );
  };
};

export default useApiGenerate;
