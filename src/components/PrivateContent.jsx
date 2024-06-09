import { Navigate, useLocation, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function PrivateRoute() {
    const { accessToken } = useAuth()
    const location = useLocation()

    return (
            accessToken? <Outlet />
            : <Navigate to={"/login"} state={{from: location}} replace={true} />
    )
}