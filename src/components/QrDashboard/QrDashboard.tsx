import { Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import QRForm from '../QRForm/QRForm'
import QRGenerated from '../QRGenerated/QRGenerated'
import { useContext } from 'react'
import { QRContext } from '../../contexts/QRData.context'

const QRDashboard = () => {

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
    )

}

export default QRDashboard