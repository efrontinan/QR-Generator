import './App.css'
import { Container, CssBaseline, Dialog } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import NavBar from './components/NavBar/NavBar'
import React from 'react'
import LogInForm from './components/LogInForm/LogInForm'
import AppRoutes from './routes/AppRoutes'

const App = () => {

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar handleClick={handleClick} />

      <Container maxWidth="lg" sx={{ paddingBlock: 12, maxHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 4 }}>

        <AppRoutes />

      </Container >

      <Dialog
        onClose={handleClick}
        open={open}
      >

        <LogInForm handleClick={handleClick} />

      </Dialog>

    </ThemeProvider>
  )
}

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
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#d6d6ff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)"
        }
      }
    }
  }
})

export default App
