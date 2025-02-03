import QRCode from "react-qr-code"
import defaultQr from '../../assets/default-qr.png'
import { useContext } from "react"
import { QRContext } from "../../contexts/QRData.context"
import { Button, Stack } from "@mui/material"


const QRGenerated = () => {

    const { urlValid, bgColor, color, urlInput } = useContext(QRContext)

    const handleDownload = () => {
        const QRCodeSVG = document.querySelector('svg') as SVGSVGElement

        const svgData = new XMLSerializer().serializeToString(QRCodeSVG)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        const img = new Image()

        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)

            const pngFile = canvas.toDataURL('image/png')

            const link = document.createElement('a')
            link.href = pngFile
            link.download = 'qrcode.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
    }

    return (
        <Stack component="section"
            spacing={6}
            padding={6}
            bgcolor={'white'}
            borderRadius={4}
            border={1}
            borderColor="primary.main"
            boxShadow={'0px 8px 12px rgba(24, 0, 54, 0.2)'}
            className="QRGenerated">
            {urlValid ?
                <QRCode
                    bgColor={bgColor}
                    fgColor={color}
                    size={150}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={urlInput}
                    viewBox={`0 0 150 150`}
                />
                : <img src={defaultQr} alt="QR Code" style={{ width: '100%', height: 'auto', opacity: '20%' }} />
            }
            <Button variant="contained" color="secondary" onClick={handleDownload}>Descargar mi QR</Button>
        </Stack>

    )
}

export default QRGenerated