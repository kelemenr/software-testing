import React from 'react';

const dropDownContext = React.createContext({
    chosenValue: 1,
    chosenBetType: 'normal'
});

export default dropDownContext;