const axios = require('axios');

async function fetchWithHeadersAndParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { userId: 1 },
    headers: { 'Custom-Header': 'TestHeaderValue' }
  });
  return response.config;
}

module.exports = { fetchWithHeadersAndParams };
