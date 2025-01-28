import './App.css'
import { Typography, Container, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import defaultQr from './assets/default-qr.png'
import QRCode from 'react-qr-code'
import QRForm from './components/QRForm/QRForm'
import { useContext } from 'react'
import { QRContext } from './contexts/QRData.context'

const App = () => {

  const { urlValid, bgColor, color, urlInput } = useContext(QRContext)

  const handleDownload = () => {
    const QRCodeSVG = document.querySelector('svg') as SVGSVGElement

    const svgData = new XMLSerializer().serializeToString(QRCodeSVG)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const img = new Image()

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      const pngFile = canvas.toDataURL('image/png')

      const link = document.createElement('a')
      link.href = pngFile
      link.download = 'qrcode.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }


  return (
    <Container maxWidth="lg">

      <Typography variant="h1" align="center">
        Crea tu QR
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <QRForm />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          {urlValid ?
            <QRCode
              bgColor={bgColor}
              fgColor={color}
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

    </Container >
  )
}

export default App
