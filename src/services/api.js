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

function getEstablishmentbyId(id) {
  let token = localStorage.getItem('auth-token')
  let auth = "Token " + token;
  
  return api.get("establishment/"+id,{headers:{Authorization:auth}})
}

function getEvents() {
  let token = localStorage.getItem('auth-token')
  let auth = "Token " + token
  
  return api.get("events/",{headers:{Authorization:auth}})
}

function postComment(data) {
  let token = localStorage.getItem('auth-token')
  let auth = "Token " + token;
  
  return api.post("establishment/add_comment/", data, {headers:{Authorization:auth}})
}

export {
  getEstablishment,
  getEstablishmentbyId,
  getEvents,
  postComment
}

export default api;