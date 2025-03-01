import axios from "axios";

export const client = async (endpoit, body, method) => {
    const requestConfig = {
        method,
        url : `${endpoit}`, 
        body : body, 
        headers : {'content-type' : 'application/json'}
    }
    try {
        console.log(requestConfig, "requestconfig");
        
        const response = await axios(requestConfig);
        return response
    } catch (error) {
        return error;
    }
}