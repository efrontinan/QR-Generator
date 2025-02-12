import { Button, TextField } from "@mui/material"
import { useState } from "react"

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        username: '',
        birth: 'dd/mm/aaaa'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setSignUpData({ ...signUpData, [name]: value })
    }

    return (
        <form>
            <TextField
                autoFocus
                required
                margin="dense"
                value={signUpData.email}
                onChange={handleInputChange}
                id="email"
                name="email"
                label="Dirección de correo"
                type="email"
                fullWidth
                variant="outlined"
            />

            <TextField
                required
                margin="dense"
                value={signUpData.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                fullWidth
                variant="outlined"
            />

            <TextField
                autoFocus
                required
                margin="dense"
                value={signUpData.username}
                onChange={handleInputChange}
                id="username"
                name="username"
                label="Nombre de usuario"
                type="text"
                fullWidth
                variant="outlined"
            />

            <TextField
                required
                focused
                margin="dense"
                value={signUpData.birth}
                onChange={handleInputChange}
                id="birth"
                name="birth"
                label="Fecha de nacimiento"
                type="date"
                fullWidth
                variant="outlined"
            />

            <Button variant="contained" fullWidth color="secondary" type="submit" sx={{ backgroundColor: 'secondary.main', marginTop: 4 }}>
                Crear cuenta
            </Button>
        </form>
    )
}

export default SignUpForm