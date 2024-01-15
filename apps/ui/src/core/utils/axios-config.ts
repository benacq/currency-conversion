import axios, { AxiosError } from "axios";
import CustomError from "../custom-error";

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
        throw new CustomError(error.response?.data.message, error.response?.status.toString())
    } else {
        throw new CustomError("We are having issues with this request, kindly check back in some minutes while we get it resolved", "UNKNOWN")
    }

});


axiosInstance.interceptors.request.use(function (request) {
    return request;
}, function (error: AxiosError<Error, any>) {
    console.log("AUTH INSTANCE REQUEST ERROR INTERCEPTOR: ", error);
    // throw new Error(error?.message.toString())
    throw new CustomError(error?.message.toString(), "REQUEST_ERROR")

});
