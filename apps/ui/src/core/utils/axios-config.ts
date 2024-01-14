import axios, { AxiosError } from "axios";

export const BASE_URL = "http://localhost:3000/api/v1";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});


axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error: AxiosError<any, any>) {
    console.log("AUTH INSTANCE RESPONSE ERROR INTERCEPTOR: ", error);
    
    if (error.response?.data) {
        throw new Error(error.response?.data.message)
    } else {
        throw new Error(error.response?.data.message)
    }

});


axiosInstance.interceptors.request.use(function (request) {
    return request;

}, function (error: AxiosError<Error, any>) {
    console.log("AUTH INSTANCE REQUEST ERROR INTERCEPTOR: ", error);
    throw new Error(error?.message.toString())
});
