import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPost = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw error;
    }
};

export const getUser = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};
