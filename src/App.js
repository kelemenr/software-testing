import { useState } from 'react'
import { Grid, Box, Paper, Typography, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function App() {
  const classes = useStyles()
  const [command, setCommand] = useState(1)
  
  const handleChange = (event) => {
    setCommand(event.target.value)
  }

  const sendCommand = () => {
    console.log('command:' + command)
  }

  return (
    <Box m={5}>
      <Grid container justify='center' s={2}>
        <Grid item xs={6} m={2}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant='h3' gutterBottom>Robodog</Typography>
            <Typography variant='h6' gutterBottom>Robodog is an interactive puppy that is able to react to commands and touch.</Typography>
            <Typography variant='body1' align='left'>Its functionality has the following specification:</Typography>
            <Box marginLeft={3}>
              <Typography variant='body2' align='left'>- When it hears the command 'speak' it starts barking.</Typography>
              <Typography variant='body2' align='left'>- While barking, the robodog waits for the command 'quiet', then stops barking or waits to get petted.</Typography>
              <Typography variant='body2' align='left'>- For this latter event Robodog stops barking, wags his tail for 5 seconds, then starts barking again.</Typography>
              <Typography variant='body2' align='left'>- However, after the third time petting the flustered Robodog, it stops barking, wags his tail for 5 seconds, and then goes to quiet.</Typography>
              <Typography variant='body2' align='left'>- When the silent Robodog sensors spot a Robocat, then the Robodog starts barking.</Typography>
              <Typography variant='body2' align='left'>- During an action the Robodog does not accept any other commands.</Typography>
            </Box>
            <Box m={3}>
              <FormControl fullWidth>
                <InputLabel id='command-label'>Command</InputLabel>
                <Select
                  id='command-select'
                  labelId='command-label'
                  value={command}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Speak</MenuItem>
                  <MenuItem value={2}>Quiet</MenuItem>
                  <MenuItem value={3}>Pet</MenuItem>
                </Select>
              </FormControl>
              <Box m={2}>
                <Button variant='contained' color='primary' onClick={sendCommand}>send command</Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
