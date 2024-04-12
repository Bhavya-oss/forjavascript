import axios from "axios";

const base_url = "https://api.kalibre.ai/";  //development server
// const base_url = "http://192.168.1.162:8000/";  //for Affan sever
// const base_url = "http://192.168.1.216:8000/";  //for swetha sever
// const base_url = "http://192.168.1.112:8000/";  //for nambratha mam sever
// const base_url = "http://localhost:8000/";  //for manoj




const api = axios.create({
    baseURL : base_url,
    headers: { 
        "Content-type": "application/json",
        "Authorization" : "Bearer udT8K2aZCEpTtyky7h9yPNnXj7edcvKnMHEVy7GKRQTQga8eHx"
    },
})

export default api;




