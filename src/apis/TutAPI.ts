import { AxiosResponse } from 'axios'
import ITutorialData from '../types/tutorial.type'
import { api } from './config/axiosConfig'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

export const TutAPI = {
    getAll: (): Promise<ITutorialData[]> => requests.get('/tutorials'),

    get: async function (name:any, cancel = false) {
        const response = await api.request({
            url: `/tutorials/${name}`,
            method: "GET",
            
        })
        return response.data
    }
}