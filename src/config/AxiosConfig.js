import axios from "axios"
import ResponseStruct from "../util/responsestructure/ResponseStruct"



export const BASE_URL = "https://shaadi-be.fino-web-app.agency/api/v1"

export const publicInterceptor = axios.create({
    baseURL: BASE_URL
})

export const privateInterceptor = axios.create({
    baseURL: BASE_URL,
})


publicInterceptor.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    async (error) => {
        return Promise.reject(error);
    }
)

publicInterceptor.interceptors.response.use(
    async (response) => {
        return new ResponseStruct(response?.status, response?.statusText, response?.data, "");
    },
    async (error) => {
        return new ResponseStruct(error?.code, error?.message, "", error);
    }
)