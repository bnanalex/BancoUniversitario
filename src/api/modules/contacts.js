import { apiHttp } from '../AxiosApi';

const getContacts = async (token) => {
    try {
        console.log('token', token);
        let response = await apiHttp('GET', 'v1/client/contact?page=1&page_size=20', {}, token);
        console.log('response', response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export { getContacts };