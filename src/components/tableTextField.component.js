import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function TableTextField(props) {
  //const classes = useStyles();

  return (
    <form //className={classes.root} 
    noValidate autoComplete="off">
      <TextField id="outlined-basic" variant="outlined" />
    </form>
  );
}

export default TableTextField();