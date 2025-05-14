import axios from "axios"

export const API_URL_BACKEND = 'http://localhost:3000/'

export const apiHttp = async (
  method,
  endpoint,
  data,
  token,
  options = {},
) => {

  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': token ? 'application/json' : 'application/x-www-form-urlencoded',
    'Authorization': token ? `Bearer ${token.replace(/['"]+/g, '')}` : '',
  }

  if (!Object.prototype.hasOwnProperty.call(options, 'headers'))
    options.headers = defaultHeaders

  let serviceResponse = {}

  method = method.toLowerCase()
  const servicePromise = axios({
    method,
    url: `${API_URL_BACKEND}${endpoint}`,
    data,
    ...options,
  })
  
  try {
    const [materializedPromise] = await Promise.all([servicePromise])
    serviceResponse = { ...materializedPromise.data }
  }
  catch (error) {
    console.log('error', error)
    serviceResponse = buildErrorMessage(error)
  }

  return serviceResponse
}

function buildErrorMessage(error) {
  console.log('error', error)
  console.error(error.response)

  return {
    ok: 0,
    message: {
      code: error.response.status,
      text: error.response.data.message,
    },
  }
}
