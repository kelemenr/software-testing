import React from 'react';
import {useContext, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NumberDropDown from './numberDropDown.component.js';
import TypeDropDown from './typeDropDown.component.js';
import TableTextField from './tableTextField.component.js';
import DropDownContext from '../context/dropdown-context.js';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontFamily: 'Calibri',
  },
  table_header: {
    background: '#7F81AA',
    color: '#FFFFFF'
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#7F81AA',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#7F81AA'
  },
}))(TableCell);

export default function CalculatorTable() {
  const classes = useStyles();

  const getRowContent = rowNumber => {
    let rows = [];
    for (let i = 0; i < rowNumber; i++) {
      rows.push(
      <TableRow >
        <TableCell align="left">Bet #{i + 1}</TableCell>
        <TableCell align="left"><TableTextField></TableTextField></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>);
    }
    return rows;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.table_header}>
              <TableRow>
                <TableCell><b>Amount of Bets</b></TableCell>
                <TableCell align="left"><NumberDropDown></NumberDropDown></TableCell>
                <TableCell align="right"><b>Betting Type</b></TableCell>
                <TableCell align="right"><TypeDropDown></TypeDropDown></TableCell>
              </TableRow>
        </TableHead>
        <TableBody>
          <DropDownContext.Consumer>
            {(context) => getRowContent(context.chosenValue)}
          </DropDownContext.Consumer>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
