import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import QRsTable from "../../components/QRsTable/QrsTable"

const Profile = () => {

    const { loggedUser } = useContext(AuthContext)


    return (
        <div className="Profile">
            <h1>Bienvenid@ {loggedUser.username}</h1>
            <QRsTable />
        </div>
    )
}

export default Profile