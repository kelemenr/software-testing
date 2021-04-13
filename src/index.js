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
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </MuiThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
)
