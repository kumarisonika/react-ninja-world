import { AxiosResponse } from 'axios'
import IVillageData from '../types/village.type'
import { api } from './config/axiosConfig'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

export const VillageAPI = {
    getAll: (): Promise<IVillageData[]> => requests.get('/village'),

    get: async function (id:any, cancel = false) {
        const response = await api.request({
            url: `/village/${id}`,
            method: "GET",
            
        })
        return response.data
    },
    create: async function(village:any){
        const response = await api.post('/village', village)
        .then(response => {
            return response.data
        })
        return response
    },

    update: async function(id:any,village:any){
        const response =await api.put(`/village/${id}`, village)
        .then(response => {
            return response.data
        })
        return response
    },

    delete: (id:any): Promise<{}> => requests.delete(`/village/${id}`)

}