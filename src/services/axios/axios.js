import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API_URL;
const key = import.meta.env.VITE_REACT_APP_API_KEY;
const host = import.meta.env.VITE_REACT_APP_API_HOST;
const config = {
  "X-RapidAPI-Key": `${key}`,
  "X-RapidAPI-Host": `${host}`,
};
const axiosInt = axios.create({
  baseURL: url,
  params: {
    lang: "en",
    country: "in",
  },
  headers: {
    ...config,
  },
});

export default axiosInt;
