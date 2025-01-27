import './App.css'
import { Typography, Container, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import defaultQr from './assets/default-qr.png'
import { useState } from 'react'
import QRCode from 'react-qr-code'

const App = () => {
  const [urlInput, setUrlInput] = useState('')
  const [urlValid, setUrlValid] = useState(false)
  const [urlError, setUrlError] = useState(false)

  const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9-._~:\/?#@!$&'()*+,;=]*)?$/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUrlInput(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!urlPattern.test(urlInput)) {
      setUrlError(true)
      return
    }

    setUrlError(false)
    setUrlValid(true)
    console.log('URL válida:', urlInput)
  }

  const handleDownload = () => {
    const QRCodeSVG = document.querySelector('svg') as SVGSVGElement

    const svgData = new XMLSerializer().serializeToString(QRCodeSVG)
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'qrcode.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Container maxWidth="lg">

      <Typography variant="h1" align="center">
        Crea tu QR
      </Typography>

      <Grid container spacing={2}>
        <Grid size={8}>

          <form onSubmit={handleSubmit}>

            <TextField
              error={urlError}
              id="url-field"
              label="Introduce tu URL"
              variant="outlined"
              fullWidth
              size="medium"
              value={urlInput}
              onChange={handleChange}
              helperText={urlError ? 'Introduce una url válida' : ''} />

            <Button variant="text" type='submit'>Generar QR</Button>

          </form>
        </Grid>
        <Grid size={4}>
          {urlValid ?
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={urlInput}
              viewBox={`0 0 256 256`}
            />
            : <img src={defaultQr} alt="QR Code" style={{ width: '100%', height: 'auto', opacity: '20%' }} />
          }


          <Button variant="contained" onClick={handleDownload}>Descargar mi QR</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
