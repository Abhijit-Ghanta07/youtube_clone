import axios from "axios";
const key = "d8f57759e6mshf05be1e3266488ap196015jsne709ff4fd7c3";
// const key = process.env.REACT_APP_API_KEY;
const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": `${key}`,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
async function FetchData(query) {
  console.log(query);
  const base_url = `https://youtube138.p.rapidapi.com/${query}`;
  const data = await axios.get(base_url, options);
  return data;
}
export default FetchData;
