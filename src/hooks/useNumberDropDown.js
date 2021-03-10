import React from 'react';

export default function useNumberDropDown() {
  const [chosenNumber, setChosenNumber] = React.useState(''); 

  return {chosenNumber, setChosenNumber}
}