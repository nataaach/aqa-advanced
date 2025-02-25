const { fetchMockedData } = require('../task3.js');
const axios = require('axios');

test('Успішний запит', async () => {
  axios.get.mockResolvedValue({ data: { message: 'Success' } });
  const data = await fetchMockedData();
  expect(data).toEqual({ message: 'Success' });
});

test('Невдалий запит', async () => {
  axios.get.mockRejectedValue(new Error('Network Error'));
  const data = await fetchMockedData();
  expect(data).toBe('Error fetching data');
});
