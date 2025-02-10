import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useContext, useState } from "react";
import authServices from "../../services/auth.services";
import { AuthContext } from "../../contexts/auth.context";

interface LogInFormProps {
    handleClick: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ handleClick }) => {

    const { authenticateUser } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        authServices
            .loginUser(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
            })
            .then(() => {
                handleClick()
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="LogInForm" onSubmit={handleFormSubmit}>
            <DialogTitle id="alert-dialog-title" color='primary.dark' variant="h4">
                {"Inicia sesión"}
            </DialogTitle>
            <DialogContent>

                <DialogContentText >
                    Inicia sesión para guardar y consultar tus códigos QR
                </DialogContentText>

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    value={loginData.email}
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    onChange={handleInputChange}
                />

                <TextField
                    required
                    margin="dense"
                    id="password"
                    name="password"
                    value={loginData.password}
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={handleInputChange}
                />

                <DialogContentText>
                    ¿No tienes cuenta?  <a href="/signup">Regístrate</a>
                </DialogContentText>

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClick} >Cancelar</Button>
                <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: 'primary.dark' }}>Iniciar sesión</Button>
            </DialogActions>
        </form>

    )
}

export default LogInForm