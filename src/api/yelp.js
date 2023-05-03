import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer CZIfsinqOwDv7QihxCasyise0DBd3VOzx6DcLJNmcIp_pI0qIOkHlxMCwa3N2HUvnpzxTlzlt1zKDseYvq0V9IbXQc4Xz6XWsFhBISktoy70Uo2i2RItlRpkkKJSZHYx",
  },
});
