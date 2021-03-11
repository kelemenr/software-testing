import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import DropDownContext from '../context/dropdown-context.js';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
        fontFamily: 'Calibri'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function NumberDropDown() {
    const classes = useStyles();
    const { chosenNumber, setChosenNumber } = React.useContext(DropDownContext)
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    //console.log('value of dropdown: ', chosenNumber);

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={chosenNumber}
                    onChange={e => setChosenNumber(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="" disabled></MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
                <FormHelperText>Choose Amount</FormHelperText>
            </FormControl>
        </div>
    );
}

