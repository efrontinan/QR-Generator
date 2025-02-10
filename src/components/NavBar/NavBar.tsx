import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
    handleClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {

    const { loggedUser, logoutUser } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const navigate = useNavigate()

    return (
        <AppBar position="static" color="primary" className="NavBar" >
            <Toolbar sx={{ backgroundColor: 'primary.dark' }}>
                <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    QR·Generator
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="secondary"
                        onClick={handleMenu}
                        sx={{ gap: 1, paddingInline: 0 }}
                    >
                        {loggedUser && <Typography>{loggedUser?.username}</Typography>}
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        {loggedUser &&
                            <>
                                <MenuItem onClick={() => navigate('/profile')}>Mi perfil</MenuItem>
                                <MenuItem onClick={logoutUser}>Cerrar sesión</MenuItem>
                            </>
                        }

                        {!loggedUser &&
                            <>
                                <MenuItem onClick={handleClick}>Iniciar sesión</MenuItem>
                                <MenuItem onClick={() => navigate('/signup')}>Registrarse</MenuItem>
                            </>
                        }

                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar