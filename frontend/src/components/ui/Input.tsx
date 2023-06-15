import React from 'react';

interface Props {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputLabel: string;
  inputType?: string;
}

const Input: React.FC<Props> = ({
  inputValue,
  handleChange,
  inputLabel,
  inputType,
}) => {
  return (
    <>
      <label
        htmlFor={inputLabel}
        className='text-primary padding-right padding-left'
      >
        {inputLabel}
      </label>
      <input
        className='margin-top'
        id={inputLabel}
        type={inputType || 'text'}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
