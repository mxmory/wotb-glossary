import axios from "axios";

export default axios.create({
  baseURL: "https://api.wotblitz.ru/wotb/",
  headers: {
    "Content-type": "application/json",
  },
  params: {
    application_id: "d67cea5642b11e9a3c3a9f8a8e52ee6a",
  },
});
