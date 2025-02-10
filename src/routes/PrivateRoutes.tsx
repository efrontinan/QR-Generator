import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import { Navigate, Outlet } from "react-router-dom"
import { CircularProgress } from "@mui/material"

const PrivateRoutes = () => {

    const { loggedUser, isFetchingUser } = useContext(AuthContext)

    if (isFetchingUser) {
        return <CircularProgress />
    }

    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return <Outlet />

}

export default PrivateRoutes