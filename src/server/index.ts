import axios from "axios";

const ApiBase = axios.create({
  withCredentials: true,
  //TODO: Не забыть перетащить в НЖИНЭКС
  baseURL: "http://localhost:5000/api/v1"
});

ApiBase.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default ApiBase;
