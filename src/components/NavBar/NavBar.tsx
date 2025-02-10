import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle'

interface NavBarProps {
    handleClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {

    return (
        <AppBar position="static" color="primary" className="NavBar" >
            <Toolbar sx={{ backgroundColor: 'primary.dark' }}>
                <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
                    QR·Generator
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar