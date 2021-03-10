import React from 'react';

export default function useTypeDropDown() {
  const [chosenType, setChosenType] = React.useState(''); 

  return {chosenType, setChosenType}
}