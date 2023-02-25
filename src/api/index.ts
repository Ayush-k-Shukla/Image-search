import axios from 'axios';

const baseUrl = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_APP_UNSPLASH_API_ACCESS_KEY
}`;
const baseUrlToList = `https://api.unsplash.com/photos/?client_id=${
  import.meta.env.VITE_APP_UNSPLASH_API_ACCESS_KEY
}`;

export const getImageList = async () => {
  try {
    const res = await axios.get(baseUrlToList);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getImageByQuery = async (query: string) => {
  try {
    const res = await axios.get(`${baseUrl}&&query=${query}`);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
