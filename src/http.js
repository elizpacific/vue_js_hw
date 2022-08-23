import axios from 'axios'

let api = axios.create({
        baseURL: "http://localhost:8183",
        headers: {
            "Content-type":"application/json",
            "api-token": "$2y$10$fVDieAyZxa.yDWk0f0mnvuGrS2HKLG6wNxi7i/5pUxGnVotgIGQ4O"
        }
})

export default api;
