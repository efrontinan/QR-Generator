import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface UserData {
    email: string
    password: string
    username?: string
    birth?: string
}

class AuthServices {

    private axiosApp: AxiosInstance

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`,
        })

        this.axiosApp.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken && config.headers) {
                config.headers.Authorization = `Bearer ${storedToken}`
            }

            return config
        })
    }

    signUpUser(userData: UserData): Promise<AxiosResponse> {
        return this.axiosApp.post('/signup', userData)
    }

    loginUser(userData: UserData): Promise<AxiosResponse> {
        return this.axiosApp.post('/login', userData)
    }

    verifyUser(): Promise<AxiosResponse> {
        return this.axiosApp.get('/verify')
    }

}

export default new AuthServices()