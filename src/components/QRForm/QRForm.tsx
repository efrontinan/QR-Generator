import { Button, Stack, TextField } from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import { CSSProperties, useContext } from "react"
import { QRContext } from "../../contexts/QRData.context"

const QRForm = () => {

    const {
        setUrlInput,
        setColor,
        setBgColor,
        setUrlError,
        urlInput,
        setUrlValid,
        urlError,
        color,
        bgColor
    } = useContext(QRContext)

    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9-._~:\/?#@!$&'()*+,;=]*)?$/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setUrlInput(value)
    }

    const handleColorChange = (value: string) => {
        setColor(value)
    }

    const handleBGColorChange = (value: string) => {
        setBgColor(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!urlPattern.test(urlInput)) {
            setUrlError(true)
            return
        }

        setUrlError(false)
        setUrlValid(true)
        console.log('URL válida:', urlInput)
    }

    const formStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '16px',
        width: '100%',
        justifyContent: 'center'
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <TextField
                error={urlError}
                id="url-field"
                label="Introduce tu URL"
                variant="outlined"
                fullWidth
                size="medium"
                value={urlInput}
                onChange={handleChange}
                helperText={urlError ? 'Introduce una url válida' : ''} />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <MuiColorInput
                    format='hex8'
                    value={color}
                    onChange={(value) => handleColorChange(value)}
                    label='Selecciona el color del QR' />

                <MuiColorInput
                    format='hex8'
                    value={bgColor}
                    onChange={(value) => handleBGColorChange(value)}
                    label='Selecciona el color de fondo' />
            </Stack>

            <Button variant="text" type='submit'>Generar QR</Button>
        </form>
    )
}

export default QRForm