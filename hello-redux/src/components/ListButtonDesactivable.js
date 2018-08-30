import React from 'react';
import uuid from 'uuid';
import { ButtonCountableDesactivable } from './ButtonCountable';

const ListButtonDesactivable = () => {
  const buttons = [];

  for (let i = 0; i < 4; i++) {
    buttons.push(<ButtonCountableDesactivable key={uuid()} i={i}/>);
  }

  return (
    <div>
      {buttons}
    </div>
  )
};

export {
  ListButtonDesactivable,
};
