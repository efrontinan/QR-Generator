import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"

interface LogInFormProps {
    handleClick: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ handleClick }) => {

    return (
        <form className="LogInForm">
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
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                />

                <TextField
                    required
                    margin="dense"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
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