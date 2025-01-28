import QRCode from "react-qr-code"
import defaultQr from '../../assets/default-qr.png'
import { useContext } from "react"
import { QRContext } from "../../contexts/QRData.context"
import { Button } from "@mui/material"


const QRGenerated = () => {

    const { urlValid, bgColor, color, urlInput, } = useContext(QRContext)

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
        <>{urlValid ?
            <QRCode
                bgColor={bgColor}
                fgColor={color}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={urlInput}
                viewBox={`0 0 256 256`}
            />
            : <img src={defaultQr} alt="QR Code" style={{ width: '100%', height: 'auto', opacity: '20%' }} />
        }
            <Button variant="contained" onClick={handleDownload}>Descargar mi QR</Button>
        </>
    )
}

export default QRGenerated