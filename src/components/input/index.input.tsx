import { InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export interface CustomInputChangeFuncInterface {
  name: string;
  value?: string;
}

interface PropTypes {
  name?: string;
  value: string;
  handleValueChange: (args: CustomInputChangeFuncInterface) => any;
  label?: string;
  fullWidth?: boolean;
  placeholder?: string;
  type?: 'button' | 'number' | 'text';
  prependIcon?: JSX.Element;
  darkTheme?: boolean;
}

function CustomInput({
  name,
  value,
  type,
  handleValueChange,
  label,
  placeholder,
  fullWidth = false,
  darkTheme = false,
  prependIcon,
}: PropTypes) {
  const [val, setVal] = useState<string>(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    setVal(value);
    handleValueChange({ name, value });
  };

  return (
    <TextField
      type={type ?? 'text'}
      name={name}
      label={label}
      value={val}
      variant='outlined'
      onChange={handleValChange}
      fullWidth={fullWidth}
      placeholder={placeholder}
      size='small'
      inputProps={{
        style: {
          color: darkTheme ? '#8D8D8D' : '#754545',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>{prependIcon}</InputAdornment>
        ),
      }}
    />
  );
}

export default CustomInput;
