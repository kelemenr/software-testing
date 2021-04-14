import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#90caf9'
    }
  },
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </MuiThemeProvider >,
  document.getElementById('root')
)
