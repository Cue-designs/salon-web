import axios from "axios";
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
});
