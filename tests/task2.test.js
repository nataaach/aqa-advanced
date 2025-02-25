const { fetchWithHeadersAndParams } = require('../task2.js');

test('Перевіряємо, що все включено', async () => {
  const config = await fetchWithHeadersAndParams();
  expect(config.headers['Custom-Header']).toBe('TestHeaderValue');
  expect(config.params.userId).toBe(1);
});
