import './App.css'
import { Typography, Container, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import defaultQr from './assets/default-qr.png'

const App = () => {

  let urlError = false

  return (
    <Container maxWidth="lg">

      <Typography variant="h1" align="center">
        Crea tu QR
      </Typography>

      <Grid container spacing={2}>
        <Grid size={8}>
          <TextField
            error={urlError}
            id="url-field"
            label="Introduce tu URL"
            variant="outlined"
            fullWidth
            size="medium"
            helperText={urlError ? 'Introduce una url válida' : ''} />
        </Grid>
        <Grid size={4}>
          <img src={defaultQr} alt="QR Code" style={{ width: '100%', height: 'auto' }} />
          <Button variant="contained">Descargar mi QR</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
