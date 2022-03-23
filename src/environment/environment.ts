const { REACT_APP_API_BASE_URL, NODE_ENV = ''} = process.env

const environment = NODE_ENV.toLowerCase()
const apiBaseUrl = REACT_APP_API_BASE_URL

export {
    apiBaseUrl,
    environment
}