import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7226/api", // Use HTTPS endpoint
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
