import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import React, { useState } from 'react';
import TaskPickerOption from '../../enums/TaskPickerOption';
import useSetTaskVisibility from '../../hooks/useSetTaskVisibility';

const TaskPicker = () => {
  const [option, setOption] = useState<TaskPickerOption>(TaskPickerOption.ALL);
  const setTaskVisibility = useSetTaskVisibility();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const optionNumber = Number((e.target as HTMLInputElement).value);
    setOption(optionNumber as TaskPickerOption);

    setTaskVisibility(option);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Task visibility</FormLabel>
      <RadioGroup
        aria-label="visibility"
        name="visibility"
        value={option}
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
