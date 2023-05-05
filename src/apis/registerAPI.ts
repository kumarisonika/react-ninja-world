import { AxiosResponse } from 'axios'
import { AnyTxtRecord } from 'dns';
import IRegisterData from '../types/register.type';
import { api } from './config/axiosConfig'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => api.get(url).then(responseBody),
    post: (url: string, body: {}) => api.post(url, body).then(responseBody),
    put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
}

export const RegisterAPI = {
    getAll: (): Promise<IRegisterData[]> => requests.get('/register'),

    get: async function (id:any, cancel = false) {
        const response = await api.request({
            url: `/register/${id}`,
            method: "GET",
        })
        return response.data
    },

    create: async function (register: any){
        const response = await api.post('/register', register)
        .then(response => {
            return response.data
        })
        return response
    },

    update: async function (id:any,register:any) {
        const response = await api.put(`/register/${id}`, register)
        .then(response => {
            return response.data
        })
        return response        
    },

    delete:(id:any): Promise<{}> => requests.delete(`/register/${id}`)
}