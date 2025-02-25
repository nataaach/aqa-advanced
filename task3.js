jest.mock('axios');
const axios = require('axios');

async function fetchMockedData() {
  try {
    const response = await axios.get('/mock-endpoint');
    return response.data;
  } catch (error) {
    return 'Error fetching data';
  }
}

module.exports = { fetchMockedData };
