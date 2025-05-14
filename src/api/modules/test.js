import { apiHttp } from '../AxiosApi';

const gettest = async(token) =>{
    let response = await apiHttp('GET', 'ping')
    console.log('response', response)
    return response.plans
}


export { gettest} ;