import axios from "axios";
import { useEffect, useState } from "react";

const key = import.meta.env.VITE_REACT_APP_API_KEY;
const url = import.meta.env.VITE_REACT_APP_URL;
// const key = process.env.REACT_APP_API_KEY;
const config = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": `${key}`,
    "X-RapidAPI-Host": `${url}`,
  },
};
// hook fetchData
const useFetchData = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  console.log(path);
  useEffect(() => {
    const abortController = new AbortController();
    const getPathData = async () => {
      let fetchUrl = `https://youtube138.p.rapidapi.com/${path}`;
      try {
        setLoading(true);
        const { data } = await axios.get(fetchUrl, {
          ...config,
          signal: abortController.signal,
        });
        setData(data);
      } catch (err) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    };
    getPathData();
    return () => {
      abortController.abort();
    };
  }, [path]);

  return { data, err, loading };
};

async function FetchData(query = "", signal = "") {
  console.log(query);
  const base_url = `https://youtube138.p.rapidapi.com/${query}`;
  const data = await axios.get(base_url, {
    ...config,
    signal,
  });
  return data;
}
export { useFetchData, FetchData };
