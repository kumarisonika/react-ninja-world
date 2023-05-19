import axios from 'axios'
import { api } from './config/axiosConfig';

export const getSignUpResponse = async (data:any) => {
    const {data: response} = await axios.post(
        `http://localhost:8000/shinobiAPI/api/signup`,data
    );
    return response
}