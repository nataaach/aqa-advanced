function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(error => console.error("Помилка при отриманні:", error));
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.error("Помилка при отриманні:", error));
}

Promise.all([fetchTodo(), fetchUser()]).then(results => {
    console.log("Promise.all:", results);
});

Promise.race([fetchTodo(), fetchUser()]).then(result => {
    console.log("Promise.race:", result);
});