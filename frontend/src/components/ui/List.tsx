import React from 'react';

interface Props {
  listItems: string[];
}

const List: React.FC<Props> = ({ listItems }) => {
  return (
    <ul className='list-unstyled'>
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
