import './App.css'
import { Typography, Container, CssBaseline, Stack, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import QRForm from './components/QRForm/QRForm'
import QRGenerated from './components/QRGenerated/QRGenerated'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import NavBar from './components/NavBar/NavBar'
import { QRContext } from './contexts/QRData.context'
import { useContext } from 'react'

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
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            color: "#0f0080",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1d00ff",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1d00ff",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1d00ff",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#0f0080",
            "&.Mui-focused": {
              color: "#0f0080",
            },
          }
        }
      }
    }
  }
})
const App = () => {

  const {
    setUrlInput,
    setColor,
    setBgColor,
    setUrlError,
    setUrlValid
  } = useContext(QRContext)

  const handleCleanForm = () => {
    setUrlInput('')
    setUrlValid(false)
    setUrlError(false)
    setColor('#000000')
    setBgColor('#ffffff00')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar />

      <Container maxWidth="lg" sx={{ paddingBlock: 12, maxHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Grid container spacing={{ sm: 8, md: 20 }} justifyContent="center">

          <Grid
            container
            size={{ sm: 12, md: 6 }}
            direction="column"
            spacing={4}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}>

            <Stack>

              <Typography variant="h1" align="left" color='primary.dark' paddingBlockStart={4}>
                Crea tu QR
              </Typography>

              <Typography align="left" paddingBlockStart={4}>
                Bienvenido al generador de códigos QR donde podrás crear y personalizar tu código QR de forma gratuita.
              </Typography>

              <Button
                variant="text"
                color="primary"
                sx={{ alignSelf: 'flex-start', paddingBlockStart: '16px', paddingInline: '0' }}
                onClick={handleCleanForm}>
                Limpiar formulario
              </Button>

            </Stack>

            <QRForm />

          </Grid>

          <Grid
            container
            size={{ sm: 12, md: 4 }}
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
