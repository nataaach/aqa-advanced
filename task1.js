const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
  } catch (error) {
    return error.response ? error.response.status : 'Network Error';
  }
}

module.exports = { fetchInvalidUrl };
