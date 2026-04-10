import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c364971ca9c46cc8362580f63461dfb",
  },
});
