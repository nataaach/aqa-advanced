async function fetchTodoAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return await response.json();
    } catch (error) {
        console.error("Помилка:", error);
    }
}

async function fetchUserAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return await response.json();
    } catch (error) {
        console.error("Помилка:", error);
    }
}

async function fetchDataAsync() {
    try {
        const todo = await fetchTodoAsync();
        const user = await fetchUserAsync();
        console.log("Результат:", { todo, user });
    } catch (error) {
        console.error("Помилка:", error);
    }
}

fetchDataAsync();
