const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder API Tests", () => {
  test("GET /posts/1 - Отримання поста", async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
  });

  test("GET /users/1 - Отримання користувача", async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("email");
  });

  test("POST /posts - Створення нового поста", async () => {
    const newPost = { title: "Тестовий пост", body: "Це тіло поста", userId: 1 };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty("id");
  });

  test("POST /comments - Додавання коментаря", async () => {
    const newComment = { postId: 1, name: "Тестовий коментар", email: "test@example.com", body: "Це текст коментаря" };
    const response = await axios.post(`${BASE_URL}/comments`, newComment);
    
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty("id");
  });

  test("GET /todos/1 - Отримання задачі", async () => {
    const response = await axios.get(`${BASE_URL}/todos/1`);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("completed");
  });
});
