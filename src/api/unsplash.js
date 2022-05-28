import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID wy6J01ABhr6dbwsUWGiBQvp6foaBly8GdRqV4wuEHlE'
    }
});