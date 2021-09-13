import axios from "axios";

const api = axios.create({
  baseURL: "https://serene-hamlet-41207.herokuapp.com/api/",
});

export default api;