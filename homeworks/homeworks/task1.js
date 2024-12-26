function calculateArea(width, height) {
    return width * height;
}

const calculateAreaExpression = function(width, height) {
    return width * height;
};

const calculateAreaArrow = (width, height) => width * height;

console.log("Результат:", calculateArea(5, 10)); 
console.log("Результат:", calculateAreaExpression(5, 10)); 
console.log("Результат:", calculateAreaArrow(5, 10)); 
