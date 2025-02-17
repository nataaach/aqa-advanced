function timer(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

timer("Hello, world!", 2000);