import React from 'react';

interface Props {
  headingText: string;
}

const Heading: React.FC<Props> = ({ headingText }) => {
  return (
    <div className='col-lg-10 align-self-end'>
      <h1 className='text-uppercase text-white font-weight-bold'>
        {headingText}
      </h1>
      <hr className='divider my-4' />
    </div>
  );
};

export default Heading;
