import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6VOJGZzbwh6WYAy5Epqa3W65NDaLYYmLq1iEiK3P5Y0' 
    }
})