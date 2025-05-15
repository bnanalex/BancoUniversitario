import { apiHttp } from '../AxiosApi';

const registerUser = async(data) =>{
    try {
        console.log('data', data)
        let response = await apiHttp('POST', 'v1/public/client/user/register', data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
const loginUser = async(data) =>{
    try {
        console.log('data', data)
        let response = await apiHttp('POST', 'v1/public/client/user/login', data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { registerUser, loginUser};