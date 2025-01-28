import './App.css'
import { Typography, Container, CssBaseline, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import QRForm from './components/QRForm/QRForm'
import QRGenerated from './components/QRGenerated/QRGenerated'
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    background: {
      default: "#d6d6ff"
    },
    primary: {
      main: "#1d00ff",
      light: '#b999ff',
      dark: '#0f0080',
      contrastText: '#ffffff',
    },
    secondary: {
      main: "#e1ff00",
      light: '#fcffe7',
      dark: '#9b9300',
      contrastText: '#424242',
    }
  },
  typography: {
    "fontFamily": `Nunito, "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    h1: {
      fontSize: 40,
      fontWeight: 600
    }
  }
})
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ paddingBlock: 12, maxHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Grid container spacing={{ sm: 8, md: 20 }} >
          <Grid
            container
            size={{ sm: 12, md: 8 }}
            direction="column"
            spacing={8}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}>
            <Stack>
              <Typography variant="h1" align="left" color='primary' paddingBlockStart={4}>
                Crea tu QR
              </Typography>
              <Typography align="left" color='primary-dark' paddingBlockStart={4}>
                Bienvenido al generador de códigos QR donde podrás crear y personalizar tu código QR de forma gratuita.
              </Typography>
            </Stack>

            <QRForm />
          </Grid>

          <Grid
            container
            size={{ sm: 12, md: 3 }}
            direction="column"
            spacing={8}
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            <QRGenerated />
          </Grid>
        </Grid>

      </Container >
    </ThemeProvider>
  )
}

export default App
