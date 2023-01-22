import axios from "axios";

export default axios.create({
  baseURL: "https://full-stack-backend-ebon.vercel.app/"
  // baseURL: "http://localhost:3001"
});