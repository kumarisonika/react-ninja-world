import axios from 'axios'

export const getLoginResponse = async (data:any) => {
    const {data: response} = await axios.post(
        `http://127.0.0.1:8000/shinobiAPI/login/`,data
    );
    return response
}