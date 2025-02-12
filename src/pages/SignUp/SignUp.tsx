import { Stack, Typography } from "@mui/material"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

const Signup = () => {

    return (
        <div className="Signup">
            <Stack width={{ xs: '100%', sm: '80%', md: '60%', lg: '60%' }} margin='auto' spacing={4} padding={2} sx={{ backgroundColor: '#ffffff88', borderRadius: 2 }}>
                <Typography variant="h1" align="left" color='primary.dark' paddingBlock={4}>
                    Regístrate y guarda todos tus QR
                </Typography>
                <SignUpForm />
            </Stack>
        </div>
    )
}

export default Signup