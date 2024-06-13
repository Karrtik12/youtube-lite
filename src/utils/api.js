import axios from "axios";

const baseUrl = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KE,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  console.log(`${baseUrl}/${url}`);
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};
