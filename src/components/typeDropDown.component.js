import React from 'react';
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
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '25ch',
    },
}));

export default function TypeDropDown() {
    const classes = useStyles();
    const {chosenType, setChosenType} = React.useContext(DropDownContext);
    const [open, setOpen] = React.useState(false);

    {/*const handleChange = (event) => {
        setChosenType(event.target.value);
    };*/}

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={chosenType}
                    onChange={e => setChosenType(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value={''} disabled></MenuItem>
                    <MenuItem value={'normal'}>Normal</MenuItem>
                    <MenuItem value={'two-chance'}>Two-chance</MenuItem>
                    <MenuItem value={'combined'}>Combined</MenuItem>
                </Select>
                <FormHelperText>Choose Type</FormHelperText>
            </FormControl>
        </div>
    );
}

