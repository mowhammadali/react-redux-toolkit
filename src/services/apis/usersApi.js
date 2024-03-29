import api from "../config/api";

export const fetchUsers = async () => {
    try {
        const respone = await api.get('users');
        return respone;
    }
    catch (error) {
        throw error;
    }
}

export const postUser = async (userData) => {
    try {
        const response = await api.post('users' , userData);
        return response;
    }
    catch (error) {
        throw error;
    }
}