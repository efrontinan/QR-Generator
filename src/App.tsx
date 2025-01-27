import './App.css'
import { Typography, Container, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import defaultQr from './assets/default-qr.png'
import { useState } from 'react'

const App = () => {

  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUrl(value)

    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator

    setUrlError(!urlPattern.test(url))
  }

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
            value={url}
            onChange={handleChange}
            helperText={urlError ? 'Introduce una url válida' : ''} />
        </Grid>
        <Grid size={4}>
          <img src={defaultQr} alt="QR Code" style={{ width: '100%', height: 'auto', opacity: '20%' }} />
          <Button variant="contained">Descargar mi QR</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
