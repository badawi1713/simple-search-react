import axios from "axios";

const KEY = "AIzaSyCASvu-3MHkQA_C23WI8vXGHlReb4Mhgww";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
