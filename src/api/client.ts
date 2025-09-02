import axios from "axios";

// Determine backend URL based on environment
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api" // local dev
    : "http://backend:8080/api";  // Docker Compose service name

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if your backend uses cookies
});

export default apiClient;
