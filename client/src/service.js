import { client } from "./client"
import { BACKEND_URL, REQUEST_METHODS, USERS_ENDPOINTS } from "./constant"

export const addStudentToLab = async(payload) => {
    try {
        const response = await client(`${BACKEND_URL}${USERS_ENDPOINTS.addStudentToLab}`, payload, `${REQUEST_METHODS.POST}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const requestLabChange = async(payload) => {
    try {
        const response = await client(`${BACKEND_URL}${USERS_ENDPOINTS.requestLabChange}`, payload, `${REQUEST_METHODS.POST}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const labChangeRequests = async() => {
    try {
        const response = await client(`${BACKEND_URL}${USERS_ENDPOINTS.labChangeRequests}`, `${REQUEST_METHODS.GET}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const labJoinRequests = async() => {
    try {
        const response = await client(`${BACKEND_URL}${USERS_ENDPOINTS.labJoinRequests}`, `${REQUEST_METHODS.GET}`);
        return response;
    } catch (error) {
        return error;
    }
}