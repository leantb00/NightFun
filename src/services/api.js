import axios from "axios";

const api = axios.create({
  // baseURL: "https://serene-hamlet-41207.herokuapp.com/api/",
  baseURL: "http://127.0.0.1:8000/api/",
});

function getEstablishment() {
  let token = localStorage.getItem('auth-token')
  let auth = "Token " + token
  
  return api.get("establishment/",{headers:{Authorization:auth}})
}

export {getEstablishment}

export default api;