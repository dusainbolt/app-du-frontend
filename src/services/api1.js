import axios from "axios";
import { browserHistory } from "../utils/history";

class AxiosServer {
  constructor() {
    const instance = axios.create();
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token !== "") {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common["Authorization"];
    }
    instance.interceptors.response.use(this.handelSuccess, this.handelError);
    this.instance = instance;
  }
  getFullUrl(url) {
    if (!url.startsWith("/")) {
      url = "/" + url;
    }
    return `${process.env.REACT_APP_API_URL}` + url;
  }
  handelSuccess(response) {
    return response.data;
  }
  handelError(error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      browserHistory.push("/bautroixanh/login");
      alert("Vui lòng nhấn F5 hoặc LOAD lại trang để đăng nhập");
    }
    return Promise.reject(error);
  }
  get(endpoint) {
    return this.instance.get(this.getFullUrl(endpoint));
  }
  post(endpoint, body) {
    return this.instance.post(this.getFullUrl(endpoint), body);
  }
  put(endpoint, body) {
    return this.instance.put(this.getFullUrl(endpoint), body);
  }
  delete(endpoint) {
    return this.instance.delete(this.getFullUrl(endpoint));
  }
}

export default new AxiosServer();
