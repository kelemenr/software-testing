import { useState, useEffect } from 'react'
import { Grid, Box, Paper, Typography, Select, MenuItem, InputLabel, FormControl, Button, TextField } from '@material-ui/core'
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
  const [command, setCommand] = useState('speak')
  const [action, setAction] = useState('none')
  const [active, setActive] = useState(true)
  const [flusterLevel, setFlusterLevel] = useState(0)

  const handleChange = (event) => {
    setCommand(event.target.value)
  }

  const sendCommand = () => {
    if(command === 'speak') {
      setAction('barking')
    } else if (command === 'quiet') {
      let rand = Math.floor(Math.random() * 2)

      if(rand === 1) {
        setAction('none')
      } else {
        setActive(false)
        setAction('wagging tail, and waiting for petting!')
        setTimeout(() => { setAction('barking'); setActive(true) }, 5000)
      }
    } else if (command === 'pet') {
      setActive(false)
      setAction('wagging tail, pleased!')
      setFlusterLevel(flusterLevel + 1)
      if (flusterLevel === 3) {
        setTimeout(() => { setAction('none'); setFlusterLevel(0); setActive(true) }, 5000)
      } else {
        setTimeout(() => { setAction('barking'); setActive(true) }, 5000)
      }
    }
  }

  useEffect(() => {
    // looking for robocats at every 2 secs, if doing nothing
    const interval = setInterval(() => {
      let rand = Math.floor(Math.random() * 10)
      console.log('Robocat random number:', rand)
      if(rand === 6 && action === 'none' ) {
        setAction('spotted a robocat! barking aggressively!')
      }
    }, 2000)
    return () => clearInterval(interval)
  })

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
                <TextField id='action' label='Action' variant='outlined' value={action} disabled />
              </FormControl>
            </Box>
            <Box m={3}>
              <FormControl variant='outlined' fullWidth>
                <InputLabel id='command-select'>Command</InputLabel>
                <Select
                  id='command'
                  label='Command'
                  labelId='command-select'
                  value={command}
                  onChange={handleChange}
                >
                  <MenuItem value={'speak'}>Speak</MenuItem>
                  <MenuItem value={'quiet'}>Quiet</MenuItem>
                  <MenuItem value={'pet'}>Pet</MenuItem>
                </Select>
              </FormControl>
              <Box m={2}>
                <Button variant='contained' color='primary' disabled={!active} onClick={sendCommand}>send command</Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
