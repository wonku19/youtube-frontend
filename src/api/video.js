import axios from "axios";

// http://localhost:8080/api/
const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getCategories = async () => {
  return await instance.get("category");
};

export const addVideo = async (data) => {
  return await instance.post("video", data);
};

export const getVideoes = async (page, category) => {
  let url = `video?page=${page}`;
  if (category !== null) {
    url += `&category=${category}`;
  }
  return await instance.get(url);
};
