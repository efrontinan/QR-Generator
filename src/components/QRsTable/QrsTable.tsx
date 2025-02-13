import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
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
                    setIsLoading(false)
                })
        } else {
            console.log('Usuario no verificado')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchQrs()
    }, [])

    return (
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
                                <Button>
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
    )
}

export default QRsTable