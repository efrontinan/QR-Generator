import { Box, Button, Skeleton, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import QRServices from "../../services/qr.services"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { Delete, Download } from "@mui/icons-material"

interface QRData {
    _id: string
    author: string
    svg: string
    name: string
    createdAt: string
    updatedAt: string
    __v: number
}

const QRsTable = () => {

    const { loggedUser } = useContext(AuthContext)

    const [qrs, setQrs] = useState<QRData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [alertOpen, setAlertOpen] = useState(false)
    const [alertMessage, setAlertMessage] = useState('Alerta')

    const fetchQrs = () => {
        if (loggedUser) {
            QRServices
                .getQRs(loggedUser._id)
                .then(({ data }) => {
                    setQrs(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log('Usuario no verificado')
        }
    }

    useEffect(() => {
        fetchQrs()
    }, [loggedUser])

    const deleteQr = (id: string) => {
        QRServices
            .deleteQr(id)
            .then(() => {
                alert('QR eliminado')
                fetchQrs()
            })
            .catch(err => console.log(err))
    }

    return (isLoading ?
        <Box >
            <Skeleton />
            <Skeleton animation="wave" />
        </Box>
        :
        <>
            <Table className="QRsTable">
                <TableHead>
                    <TableRow>
                        <TableCell>SVG</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Fecha de creación</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {qrs.map(qr => {
                        return (
                            <TableRow key={qr._id}>
                                <TableCell>
                                    <div dangerouslySetInnerHTML={{ __html: qr.svg }} />
                                </TableCell>
                                <TableCell>{qr.name}</TableCell>
                                <TableCell>{qr.createdAt}</TableCell>
                                <TableCell>
                                    <Button onClick={() => deleteQr(qr._id)}>
                                        <Delete />
                                    </Button>
                                    <Button>
                                        <Download />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>

            </Table>

            <Snackbar
                autoHideDuration={6000}
                message={alertMessage}
                open={alertOpen}
                onClose={() => setAlertOpen(false)}
            />
        </>
    )
}

export default QRsTable