import axios from "./axios"
import useAuth from "../hooks/useAuth"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET


const useAuthService = () => {
    const { setAccessToken } = useAuth()

    const login = async (id, password) => {
        const credentials = {
            grant_type: "client_credentials",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            username: id,
            password: password
        }

        try {
            const res = await axios.post(`/oauth/token`, credentials);
            const { access_token } = res.data
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
