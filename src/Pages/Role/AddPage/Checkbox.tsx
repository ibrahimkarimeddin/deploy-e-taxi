import React, { FC } from 'react';
import { CheckBox } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface FancyCheckboxProps {
  name: string;
  my_array: string[];
  id: string;
}

export const FancyCheckbox: FC<FancyCheckboxProps> = ({ name, my_array, id }) => {
  const handelChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    my_array.push(id);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked={false} onChange={handelChange} />} label={name} />
    </FormGroup>
  );
};

// export default FancyCheckbox;