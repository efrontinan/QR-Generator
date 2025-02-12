import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import QRServices from "../../services/qr.services"

const Profile = () => {

    const { loggedUser } = useContext(AuthContext)

    const [qrs, setQrs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchQrs = () => {
        QRServices
            .getQRs(loggedUser._id)
            .then((response) => {

                console.log(response)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchQrs()
    }, [])

    return (
        <div className="Profile">
            <h1>Bienvenid@ {loggedUser.username}</h1>
        </div>
    )
}

export default Profile