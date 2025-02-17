class ApiService {
    async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            return await response.json();
        } catch (error) {
            console.error("Помилка:", error);
        }
    }
    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            return await response.json();
        } catch (error) {
            console.error("Помилка:", error);
        }
    }
}

const apiService = new ApiService();
async function fetchWithClass() {
    try {
        const [todo, user] = await Promise.all([apiService.fetchTodo(), apiService.fetchUser()]);
        console.log("Результати через клас:", { todo, user });
    } catch (error) {
        console.error("Помилка:", error);
    }
}
fetchWithClass();
