const { fetchInvalidUrl } = require('../task1.js');

test('Обробка помилки для невірного URL', async () => {
  const errorStatus = await fetchInvalidUrl();
  expect(errorStatus).toBe(404);
});
