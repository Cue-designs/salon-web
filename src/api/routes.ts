import axios from "axios";
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
