import axios from 'axios'


export const appAPI = {
    sendMessage(data: dataMessageType) {
        return axios.post(`https://gmail-smtp-rho.vercel.app/sendMessage`, {...data})
    },
}
export type dataMessageType = {
    name: string,
    email: string,
    subject: string,
    message: string,
}