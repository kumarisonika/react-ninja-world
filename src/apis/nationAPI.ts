import { AxiosResponse } from 'axios'
import INationData from '../types/nation.type'
import { api } from './config/axiosConfig'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

export const NationAPI = {
    getAll: (): Promise<INationData[]> => requests.get('/nation'),

    get: async function (id:any, cancel = false) {
        const response = await api.request({
            url: `/nation/${id}`,
            method: "GET",
            
        })
        return response.data
    },
    create: async function (nation: any){
        console.log("THIS IS API")
        const response = await api.post('/nation', nation)
        .then(response => {
            return response.data
        })
        return response
    },

    update: async function(id:any,nation:any){
        const response =await api.put(`/nation/${id}`, nation)
        .then(response => {
            return response.data
        })
        return response

    },

    
    delete: (id:any): Promise<{}> => requests.delete(`/nation/${id}`)
}