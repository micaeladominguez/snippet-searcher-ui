// utils/api.js
import axios from 'axios';
import {useUser} from "@auth0/nextjs-auth0/client";
import {getAccessToken} from "@auth0/nextjs-auth0";

const api = axios.create({
    baseURL: 'http://snippetsps-dev.ddns.net/api', // Replace with your backend URL
});

export const getSnippetsFromUser = async (token: string) => {
    const { accessToken } = await getAccessToken(req, res);
    try {
        const response = await api.get('/snippets', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle errors
        throw new Error(error);
    }
};

export const postData = async (payload) => {
    try {
        const response = await api.post('/data', payload); // Replace with your endpoint
        return response.data;
    } catch (error) {
        // Handle errors
        throw new Error(error);
    }
};