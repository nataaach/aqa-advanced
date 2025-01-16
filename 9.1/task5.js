const users = [
    { name: "Олена", email: "olena@gmail.com", age: 28 }, 
    { name: "Андрій", email: "andriy@gmail.com", age: 34 }, 
    { name: "Марія", email: "maria@gmail.com", age: 22 } 
];


for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Електронна пошта: ${email}, Вік: ${age}`);
}