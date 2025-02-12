import { Route, Routes } from "react-router-dom"
import QRDashboard from "../pages/QrDashboard/QrDashboard"
import PrivateRoutes from "./PrivateRoutes"
import Signup from "../pages/SignUp/SignUp"
import Profile from "../pages/Profile/Profile"

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<QRDashboard />} />
                <Route path="/signup" element={<Signup />} />

                <Route element={<PrivateRoutes />} >

                    <Route path="/profile" element={<Profile />} />

                </Route>

                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </div>
    )

}

export default AppRoutes