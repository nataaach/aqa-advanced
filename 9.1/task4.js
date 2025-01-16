const person = {
    firstName: "Катя", 
    lastName: "Лінник", 
    age: 20 
};

person.email = "katya@gmail.com"; 

delete person.age;

console.log(person);