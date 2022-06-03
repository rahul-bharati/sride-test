const axios = require("axios");

const getDataFromApi = async () => {
  const url = "https://jsonkeeper.com/b/N9OS";
  const { data } = await axios.get(url);
  return data;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

module.exports = {
  getDataFromApi,
  isPrime,
};
