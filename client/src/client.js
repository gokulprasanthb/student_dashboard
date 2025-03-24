import axios from "axios";

export const client = async (endpoint, body, method) => {
    const requestConfig = {
        method,
        url : `${endpoint}`, 
        data: body,
        headers : {'content-type' : 'application/json'}
    }
    try {
        const response = await axios(requestConfig);
        return response
    } catch (error) {
        return error;
    }
}