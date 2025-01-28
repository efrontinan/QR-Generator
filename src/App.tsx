import './App.css'
import { Typography, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import QRForm from './components/QRForm/QRForm'
import QRGenerated from './components/QRGenerated/QRGenerated'

const App = () => {

  return (
    <Container maxWidth="lg">

      <Typography variant="h1" align="center">
        Crea tu QR
      </Typography>

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 8 }}>
          <QRForm />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <QRGenerated />
        </Grid>
      </Grid>

    </Container >
  )
}

export default App
