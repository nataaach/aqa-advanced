function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи мають бути цифрами");
    }
    if (denominator === 0) {
        throw new Error("Не можна ділити на 0 ");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, "a"));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}