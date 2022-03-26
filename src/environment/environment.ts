const {
    REACT_APP_API_BASE_URL,
    REACT_APP_G_API_KEY,
    REACT_APP_G_AUTH_DOMAIN,
    REACT_APP_G_PROJECT_ID,
    REACT_APP_G_STORAGE_BUCKET,
    REACT_APP_G_MESSEGING_SENDER_ID,
    REACT_APP_G_APP_ID,
    REACT_APP_G_MEASUREMENT_ID,
    REACT_APP_G_DATABASE_URL,
    NODE_ENV = ''
} = process.env

const environment = NODE_ENV.toLowerCase()
const apiBaseUrl = REACT_APP_API_BASE_URL

export {
    apiBaseUrl,
    environment,
    REACT_APP_G_API_KEY as apiKey,
    REACT_APP_G_AUTH_DOMAIN as authDomain,
    REACT_APP_G_PROJECT_ID as projectId,
    REACT_APP_G_STORAGE_BUCKET as storageBucket,
    REACT_APP_G_MESSEGING_SENDER_ID as messagingSenderId,
    REACT_APP_G_APP_ID as appId,
    REACT_APP_G_MEASUREMENT_ID as measurementId,
    REACT_APP_G_DATABASE_URL as databaseURL,
}