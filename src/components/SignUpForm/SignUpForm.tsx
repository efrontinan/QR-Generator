import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import authServices from "../../services/auth.services"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"

const SignUpForm = () => {

    const navigate = useNavigate()

    const { authenticateUser } = useContext(AuthContext)

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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement

        if (form.checkValidity() === false) {
            e.stopPropagation()
            alert('Formulario inválido')
            return
        }

        authServices
            .signUpUser(signUpData)
            .then(({ data }) => {
                const { email } = data
                return authServices.loginUser({ email, password: signUpData.password })
            })
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
            })
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <form className="SignUpForm" onSubmit={handleFormSubmit}>
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