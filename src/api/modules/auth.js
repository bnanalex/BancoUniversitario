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
        return response
    } catch (error) {
        console.log(error)
    }
}
const getBalance = async(token) =>{
    try {
        console.log('token', token)
        let response = await apiHttp('GET', 'v1/client/user/balance', {}, token)
        console.log('response', response)
        return response
    } catch (error) {
        console.log(error)
    }
}

export { registerUser, loginUser, getBalance };