import axios from "./axios"
import useAuth from "../hooks/useAuth"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET


const useAuthService = () => {
    const { setAccessToken } = useAuth()

    const login = async (id, password) => {
        const credentials ={
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "client_credentials",
            username: id,
            password: password
        }

        try {
            const res = await axios.post(`/oauth/token`, credentials, { withCredentials: true });
            const { access_token } = res.data
            console.log(access_token)
            setAccessToken(access_token)

            return { status: true }
        } catch (error) {
            throw error
        }
    }

    return {
        login,
    }
}

export default useAuthService
