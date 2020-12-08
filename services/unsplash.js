const axios = require("axios").default;

// private keys
const keys = require("../keys");

module.exports = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: `Client-ID ${keys.UNSPLASH_ACCESS_KEY}` },
});
