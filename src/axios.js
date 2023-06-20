import axios from "axios";

//backend base url
const instance = axios.create({
  baseURL: "https://whatsappclone-backend-sktx.onrender.com",
});

export default instance;
