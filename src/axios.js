import axios from "axios";

const instance = axios.create({
    baseURL: "https://korflixapi.azurewebsites.net",
})

export default instance;