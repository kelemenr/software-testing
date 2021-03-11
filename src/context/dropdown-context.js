import React from 'react';

const dropDownContext = React.createContext({
    chosenValue: 1,
    chosenType: 'normal'
});

export default dropDownContext;