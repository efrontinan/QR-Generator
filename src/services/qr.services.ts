import axios, { AxiosInstance } from "axios"

interface QRData {
    svg: string
    name: string
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

    getQRs(id: string): Promise<QRData[]> {
        return this.axiosApp.get(`/codes/${id}`)
    }
}

export default new QRServices()