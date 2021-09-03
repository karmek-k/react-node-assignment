import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import React from 'react';
import TaskPickerOption from '../../enums/TaskPickerOption';
import useSetTaskVisibility from '../../hooks/useSetTaskVisibility';
import useTaskVisibility from '../../hooks/useTaskVisibility';

const TaskPicker = () => {
  const taskVisibility = useTaskVisibility();
  const setTaskVisibility = useSetTaskVisibility();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const optionNumber = Number((e.target as HTMLInputElement).value);

    setTaskVisibility(optionNumber as TaskPickerOption);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Task visibility</FormLabel>
      <RadioGroup
        aria-label="visibility"
        name="visibility"
        value={taskVisibility}
        onChange={handleChange}
      >
        <FormControlLabel
          value={TaskPickerOption.ALL}
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          value={TaskPickerOption.DONE}
          control={<Radio />}
          label="Only done"
        />
        <FormControlLabel
          value={TaskPickerOption.UNDONE}
          control={<Radio />}
          label="Only undone"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default TaskPicker;
