import axios from 'axios';

export const api = axios.create({
    baseURL: "https://rocketnotes-api-x3q5.onrender.com"
});