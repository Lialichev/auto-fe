import axios from 'axios';

export default axios.create({
    baseURL: process.env.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});
