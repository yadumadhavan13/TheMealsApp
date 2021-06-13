import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    // MARK: - Replace the Text ABCD with Your token
    Authorization: "Bearer ABCD",
  },
});
