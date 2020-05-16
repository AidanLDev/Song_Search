import React from 'react';

interface Props {
  handleClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  buttonLabel: string;
}

const Button: React.FC<Props> = ({ buttonLabel, handleClick }) => {
  return (
    <button className='margin-left bg-light bg-primary' onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
