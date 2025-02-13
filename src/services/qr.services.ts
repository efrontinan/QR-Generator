import axios, { AxiosInstance } from "axios"

interface QRData {
    _id: string
    author: string
    svg: string
    name: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface ApiResponse {
    data: QRData[]
    status: number
    statusText: string
}

class QRServices {

    private axiosApp: AxiosInstance

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    createQR(qrData: QRData): Promise<QRData> {
        return this.axiosApp.post('/codes', qrData)
    }

    getQRs(id: string): Promise<ApiResponse> {
        const token = localStorage.getItem('authToken')
        return this.axiosApp.get(`/codes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export default new QRServices()