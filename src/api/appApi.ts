import axios, {AxiosResponse} from 'axios'


export const appAPI = {
    sendMessage(data: dataMessageType) {
        return axios.post<{ data: dataMessageType }, AxiosResponse<sendMessageResType>>(`https://gmail-smtp-rho.vercel.app/sendMessage`, {...data})
    },
}
export type dataMessageType = {
    name: string,
    email: string,
    subject: string,
    message: string,
}
export type AppError = {
    error: string
}
export type sendMessageResType = {
    text: string
}
