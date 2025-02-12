import { Route, Routes } from "react-router-dom"
import QRDashboard from "../pages/QrDashboard/QrDashboard"
import PrivateRoutes from "./PrivateRoutes"
import Signup from "../pages/SignUp/SignUp"

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<QRDashboard />} />
                <Route path="/signup" element={<Signup />} />

                <Route element={<PrivateRoutes />} >

                    <Route path="/profile" element={<h1>Página de perfil</h1>} />

                </Route>

                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </div>
    )

}

export default AppRoutes