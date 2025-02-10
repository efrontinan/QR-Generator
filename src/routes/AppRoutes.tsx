import { Route, Routes } from "react-router-dom"
import QRDashboard from "../components/QrDashboard/QrDashboard"
import PrivateRoutes from "./PrivateRoutes"

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<QRDashboard />} />
                <Route path="/signup" element={<h1>SignUpage</h1>} />

                <Route element={<PrivateRoutes />} >

                    <Route path="/profile" element={<h1>Página de perfil</h1>} />

                </Route>

                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </div>
    )

}

export default AppRoutes