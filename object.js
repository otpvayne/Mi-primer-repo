const persona = {
    nombre: 'Diego',
    edad: 25,
    ciudad: 'Madrid',
};

console.log(persona.nombre); // Diego
console.log(persona["edad"]); // 25


export const libro ={
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    paginas: 96
};

console.log(libro.titulo); // El Principito
console.log(libro['autor']); // Antoine de Saint-Exupéry
console.log(libro.paginas); // 96


const user ={
    username: 'diego123',
    email: "boom@xd.com",
    stats: {
        followers: 150,
        following: 100,
        posts: 50
    }
};
const {username,email,stats:{followers}} = user;

console.log(username); // diego123
console.log(email); //
console.log(followers); // 150